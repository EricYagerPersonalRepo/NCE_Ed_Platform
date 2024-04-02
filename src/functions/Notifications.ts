import { GraphQLResult } from "aws-amplify/api"
import { ListBroadcastNotificationsQuery, ListUserNotificationReadsQuery } from "../API"
import { amplifyApiClient } from "./AuthX"
import { listBroadcastNotifications, listUserNotificationReads } from "../graphql/queries"
import { createUserNotificationRead } from "../graphql/mutations"
import { generateClient } from 'aws-amplify/api'
import { useQuery } from "@tanstack/react-query"


const client = generateClient()

export const getBroadcastNotificationsQuery = async () => {
    try {
        const broadcastResponse = await amplifyApiClient.graphql({
            query: listBroadcastNotifications, 
            variables: {}
        })

        const readResponse = await amplifyApiClient.graphql({
            query: listUserNotificationReads,
            variables: {},
        })

        const broadcastItems = broadcastResponse.data.listBroadcastNotifications?.items ?? []
        const readItems = readResponse.data.listUserNotificationReads.items ?? []

        const newNotificationsCount = broadcastItems.filter(
            broadcastItem => !readItems.find(readItem => readItem.notificationID === broadcastItem.id)
        ).length

        const readNotificationIds = new Set(readItems.map(item => item.notificationID))

        let returnPayload = broadcastItems.map(notification => ({
            id: notification.id,
            title: notification.title,
            message: notification.message,
            createdAt: notification.createdAt,
            read: readNotificationIds.has(notification.id)
        }))

        returnPayload.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

        return { newNotificationsCount, notificationsPayload: returnPayload }
    } catch(notificationCallError) {
        console.error(notificationCallError)
        return { newNotificationsCount: 0, notificationsPayload: null }
    }
}

export const markNotificationAsRead = async(userID:string, notificationID:string) => { 
    console.log(notificationID)
    try{
        const readNotification = await amplifyApiClient.graphql({
            query: createUserNotificationRead,
            variables: {input: {
                notificationID:notificationID,
                readBy: userID
            }}
        })
        console.log("Read notification: ", readNotification)
        return readNotification
    }catch(error){
        console.log(error)
        return null
    }
}