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

export interface Notification {
    id: string;
    title: string | null;
    message: string;
    createdAt: string;
    read: boolean;
    target?: string | null;
}