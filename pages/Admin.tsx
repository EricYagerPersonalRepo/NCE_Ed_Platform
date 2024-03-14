import { GetNCEUserSettingsQuery } from "@/src/API"
import { RenderAdministrativePage } from "@/src/components/Admin"
import { amplifyApiClient } from "@/src/functions/AuthX"
import { getNCEUserSettings } from "@/src/graphql/queries"
import { GraphQLResult } from "aws-amplify/api"
import React, { useEffect, useState } from "react"

const Admin = ({userData, isMobile}:any) => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        if(userData.cognitoID!==""){
            const isAdmin = async() => {
                try{
                    let userSettingsPayload:GraphQLResult<GetNCEUserSettingsQuery> = await amplifyApiClient.graphql({
                        query: getNCEUserSettings, 
                        variables: { id: userData.cognitoID }
                    })
                    userSettingsPayload.data.getNCEUserSettings && setIsAdmin(userSettingsPayload.data.getNCEUserSettings?.isAdmin)
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
        loading ? <div></div> : isAdmin && <RenderAdministrativePage isMobile={isMobile} />
    )
}

export default Admin