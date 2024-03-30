import { getStudentProfile } from "../graphql/queries"
import { callAmplifyApi } from "./Amplify"
import { amplifyApiClient } from "./AuthX"

export const getStudentProfileByCognitoId = async(cognitoId) => {
    const getStudentProfileCall = await callAmplifyApi(getStudentProfile, cognitoId)
    return getStudentProfileCall
}