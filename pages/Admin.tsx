import { GetNCEUserSettingsQuery, GetStudentProfileQuery } from "@/src/API"
import { AdminHome } from "@/src/components/Admin"
import { amplifyApiClient } from "@/src/functions/AuthX"
import { getNCEUserSettings, getStudentProfile } from "@/src/graphql/queries"
import { GraphQLResult } from "aws-amplify/api"
import React, { useEffect, useState } from "react"

const Admin = ({userData, isMobile}:any) => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [loading, setLoading] = useState(true)

    

    useEffect(()=>{
        if(userData.cognitoID!==""){
            const isAdmin = async() => {
                try{
                    let userSettingsPayload:GraphQLResult<GetStudentProfileQuery> = await amplifyApiClient.graphql({
                        query: getStudentProfile, 
                        variables: { id: userData.cognitoID }
                    })
                    userSettingsPayload.data.getStudentProfile && setIsAdmin(userSettingsPayload.data.getStudentProfile?.isAdmin)
                    setLoading(false)
                }catch(error){
                    console.error(error)
                    setLoading(false)
                }
                
            }
            isAdmin()
        }
    },[userData.cognitoID])

    return(
        loading ? <div></div> : isAdmin && <AdminHome isMobile={isMobile} />
    )
}

export default Admin