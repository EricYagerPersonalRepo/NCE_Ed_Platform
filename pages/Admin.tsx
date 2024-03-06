import { GetNCEUserSettingsQuery } from "@/src/API"
import { MobileAdmin, RestrictedView, WebAdmin } from "@/src/components/Admin"
import { amplifyApiClient } from "@/src/functions/AuthX"
import { getNCEUserSettings } from "@/src/graphql/queries"
import { GraphQLResult } from "aws-amplify/api"
import React, { useEffect } from "react"

const Admin = ({loggedIn, userData, isMobile}:any) => {
    const [isAdmin, setIsAdmin] = React.useState(false)

    useEffect(()=>{console.log("Admin page LoggedIn: ", loggedIn)},[loggedIn])

    useEffect(()=>{
        if(userData.cognitoID!==""){
            const isAdmin = async() => {
                let userSettingsPayload:GraphQLResult<GetNCEUserSettingsQuery> = await amplifyApiClient.graphql({
                    query: getNCEUserSettings, 
                    variables: { id: userData.cognitoID }
                })
                userSettingsPayload.data.getNCEUserSettings && setIsAdmin(userSettingsPayload.data.getNCEUserSettings?.isAdmin)
            }
            isAdmin()
        }
    },[userData.cognitoID])

    const RenderAdministrativePage = () => {
        if(isAdmin){
            if(isMobile){
                return <MobileAdmin />
            }
            if(!isMobile){
                return <WebAdmin /> 
            }
        }else{
            return(<RestrictedView />)
        }
    }

    

    return(
        <RenderAdministrativePage />
    )
}

export default Admin