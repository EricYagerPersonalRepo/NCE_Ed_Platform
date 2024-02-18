export interface AuthenticatedHeaderProps {
    userData: UserDataProps
    avatarUrl?: String | undefined
}

interface UserDataProps {
    email: String | undefined
    cognitoID: String | undefined
}