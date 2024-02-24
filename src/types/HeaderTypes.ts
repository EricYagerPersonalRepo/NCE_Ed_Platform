export interface AuthenticatedHeaderProps {
    userData: UserDataProps
    avatarUrl?: String | undefined
}

interface UserDataProps {
    email: String | undefined
    cognitoID: String | undefined
}

export interface HeaderProps {
    userData?: UserDataProps
    avatarUrl?: String | undefined
}