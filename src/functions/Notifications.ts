import { GraphQLResult } from "aws-amplify/api"
import { ListBroadcastNotificationsQuery, ListUserNotificationReadsQuery } from "../API"
import { amplifyApiClient } from "./AuthX"
import { listBroadcastNotifications, listUserNotificationReads } from "../graphql/queries"

export const getBroadcastNotificationsQuery = async() => {
    try {
        const userSettingsPayload = await amplifyApiClient.graphql({
            query: listBroadcastNotifications, 
            variables: {}
        })

        const returnPayload = userSettingsPayload.data.listBroadcastNotifications?.items
        return returnPayload
    } catch(notificationCallError) {
        console.error(notificationCallError)
        return null
    }
}