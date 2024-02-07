export interface AuthenticatedHeaderProps {
    userData: UserDataProps
}

interface UserDataProps {
    email: String | undefined
    cognitoID: String | undefined
}