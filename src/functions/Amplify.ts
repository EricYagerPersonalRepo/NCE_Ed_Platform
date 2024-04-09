import { getUrl } from "aws-amplify/storage";
import { amplifyApiClient } from "./AuthX";
import { GraphQLResult, post } from "aws-amplify/api";
import { fetchAuthSession } from "aws-amplify/auth";
import { AdminAddUserToGroupCommand, CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";
import { customListCourses } from "../custom-amplify-graphql-queries";

/**
 * getPresignedUrl Function - Asynchronously retrieves a presigned URL for a given filename.
 * 
 * This function is designed to fetch a presigned URL from a backend service, allowing for secure,
 * temporary access to a resource specified by `filename`. It utilizes a custom `getUrl` function,
 * which should be configured to interact with your backend or cloud storage provider (e.g., AWS S3).
 * The `getUrl` function is expected to take an object containing the `key` (the filename) and
 * `options`, with an option to validate the existence of the object. This setup ensures that only
 * existing resources can be accessed and that the URL's validity is confirmed before it's returned.
 * 
 * @param {string} filename - The name of the file for which to generate a presigned URL.
 * @returns {Promise<string>} - A promise that resolves with the presigned URL as a string.
 */

export const getPresignedUrl = async (filename: string): Promise<string> => {
    console.log("FILE: ", filename)
    try{
        const urlExists = await getUrl({
            key: filename,
            options: {
                validateObjectExistence: false,
                accessLevel: "guest"
            }
        })

        console.log("URL EXISTS: ", urlExists)

        const returnUrl = urlExists.url.href.toString()

        if(returnUrl!==""){
            const response = await fetch(returnUrl);
            const imageBlob = await response.blob();
            const localUrl = URL.createObjectURL(imageBlob);
            return(localUrl)
        }
        
        else return("")
    }catch(presignedUrlCallError){
        console.error("Presigned URL call error: ", presignedUrlCallError)
        return ""
    }
}

/**
 * getUrlResult Function - Asynchronously retrieves a URL for a specified filename with custom options.
 * 
 * This function interacts with a backend service or cloud storage provider to obtain a URL for the given
 * filename. The URL is generated based on specific options, including access level, expiration time, and
 * whether to use an accelerated endpoint. It's primarily used to access files stored in a secure manner,
 * allowing for controlled access based on the provided options. The `getUrl` call is configured with
 * an object containing the `key` (the filename) and `options`, which dictate how the URL is generated.
 * 
 * @param {string} filename - The name of the file for which to generate a URL.
 * @returns {Promise<any>} - A promise that resolves with the URL object, containing the URL and potentially other metadata.
 */

export const getUrlResult = async(filename:string) => {
    const url = await getUrl({
        key: filename,
        options: {
            accessLevel: 'private' ,
            expiresIn: 1000,
            useAccelerateEndpoint: false 
        },
    })

    return url
}

/**
 * Simplified Amplify API call function with type safety.
 * 
 * @template T - The expected shape of the data returned from the GraphQL operation.
 * @param {Function} queryFunction - The GraphQL query or mutation function.
 * @param {object} variables - The variables object for the GraphQL operation.
 * @returns {Promise<T>} - The result of the GraphQL call.
 */
export async function callAmplifyApi<T>(queryFunction: any, variables: object): Promise<T> {
    try {
        const response = await amplifyApiClient.graphql({
            query: queryFunction,
            variables,
        }) as GraphQLResult<T>;

        if (!response.data) {
            throw new Error('No data returned from GraphQL call');
        }

        return response.data;
    } catch (error) {
        console.error('Error calling Amplify API:', error);
        throw error; // Rethrow the error to handle it in the calling context if needed.
    }
}

export async function addToAdminGroup(username) { 
    let apiName = 'AdminQueries';
    let path = '/addUserToGroup';
    let options = {
        body: {
            "username" : {username},
            "groupname": "Editors"
        }, 
        headers: {
            'Content-Type' : 'application/json',
            Authorization: `${(await fetchAuthSession()).tokens.accessToken.payload}`
        } 
    }
    return post({apiName, path, options});
}

export const fetchCoursesForDataGrid = async () => {
    try {
        const data:any = await callAmplifyApi(customListCourses, {})
        if (data.listCourses.items) {
            const rowsWithApprovalStatus = data.listCourses.items.map(item => {
                const sortedApprovals = item.approval.items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                const mostRecentApprovalStatus = sortedApprovals.length > 0 ? sortedApprovals[0].status : 'No Status'
                return { ...item, approval: mostRecentApprovalStatus, courseApprovalID: sortedApprovals[0].courseApprovalId, id: item.id }
            })
            return rowsWithApprovalStatus
        }
    } catch (error) {
        console.error('Error fetching courses:', error)
        return []
    }
}
export const fetchCourseStatusCounts = async () => {
    let pendingCount = 0
    let approvedCount = 0
    let disapprovedCount = 0
    try {
        const data:any = await callAmplifyApi(customListCourses, {})
        if (data.listCourses.items) {
            data.listCourses.items.map(item => {
                const sortedApprovals = item.approval.items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                const mostRecentApprovalStatus = sortedApprovals.length > 0 ? sortedApprovals[0].status : 'No Status'
                console.log("most recent: ", mostRecentApprovalStatus)
                switch(mostRecentApprovalStatus) {
                    case "PENDING": 
                        pendingCount++
                        break;
                    case "APPROVED":
                        approvedCount++
                        break;
                    case "DISAPPROVED": 
                        disapprovedCount++
                        break;
                    default:
                        break;
                }
            })
            console.log(pendingCount)
            return {approved: approvedCount, disapproved: disapprovedCount, pending: pendingCount}
        }
    } catch (error) {
        console.error('Error fetching courses:', error)
        return []
    }
}