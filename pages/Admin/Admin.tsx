import { AdminHome } from "@/src/components/Admin"
import React, { useEffect, useState } from "react"

const Admin = ({userData, isMobile}:any) => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        if(userData.cognitoID!==""){
            setIsAdmin(userData.isAdmin)
            setLoading(false)
        }
    },[userData.cognitoID])

    return(
        loading ? <div></div> : isAdmin && <AdminHome isMobile={isMobile} />
    )
}

export default Admin