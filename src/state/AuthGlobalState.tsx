import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { checkAuthStatus } from '../functions/AuthFunctions'
import { getCurrentUser } from 'aws-amplify/auth';
import { getPresignedUrl } from '../functions/AmplifyFunctions';

/**
 * Type definition for the AuthContext.
 * 
 * It includes the current logged-in status (loggedIn) and a function to update this status (setLoggedIn).
 * 'loggedIn' is a boolean value indicating whether the user is currently logged in.
 * 'setLoggedIn' is a function to update the 'loggedIn' state.
 */
interface AuthContextType {
    loggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    login: any;
    logout: any;
    avatarUrl: string; // Add avatarUrl to the context type
    setAvatarUrl: React.Dispatch<React.SetStateAction<string>>; // Add setter for avatarUrl
}

/**
 * Context for user authentication.
 * 
 * This context provides a way to share the user's logged-in status across the application.
 * It contains a default state with 'loggedIn' set to false and a placeholder function for 'setLoggedIn'.
 */
const AuthContext = createContext<AuthContextType>({
    loggedIn: false, 
    setLoggedIn: () => {}, 
    login: () => {}, 
    logout: () => {},
    avatarUrl: '', // Default avatarUrl state
    setAvatarUrl: () => {} // Placeholder function for setAvatarUrl
})

/**
 * Props for AuthProvider component.
 * 
 * This interface defines the type of props that AuthProvider accepts.
 * 'children' represents the child components within AuthProvider.
 */
interface AuthProviderProps {
    children: ReactNode
}

/**
 * AuthProvider Component - Manages authentication state and avatar URL for the application.
 * 
 * This component encapsulates the logic for checking the user's authentication status and fetching
 * the user's avatar, making these states accessible throughout the application via a context. Upon
 * initialization, it checks if the user is logged in and, if so, fetches the user's avatar using a
 * presigned URL. The avatar is then made available as a blob URL. It provides login and logout
 * functions to update the authentication state. Additionally, it ensures the cleanup of the avatar
 * blob URL to prevent memory leaks.
 * 
 * The component uses two useEffect hooks: one for initializing the authentication and avatar states
 * on component mount, and another dedicated to fetching the avatar whenever necessary. This setup
 * ensures that the application's state accurately reflects the user's authentication status and
 * avatar image at all times.
 * 
 * @param {AuthProviderProps} props - React children that this provider will wrap, enabling them
 * access to the authentication context.
 * 
 * @returns {JSX.Element} - A context provider that supplies the authentication state and avatar URL,
 * along with functions to modify these states, to its child components.
 */

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState('')

    const login = () => {
        setLoggedIn(true);
    };
    
    const logout = () => {
        setLoggedIn(false);
        setAvatarUrl(''); // Optionally reset avatarUrl on logout
    };

    useEffect(() => {
        async function initializeAuth() {
            try {
                // Check authentication status
                const isUserLoggedIn = await checkAuthStatus();
                setLoggedIn(isUserLoggedIn);

                // If user is logged in, fetch the avatar
                if (isUserLoggedIn) {
                    const currentUser = await getCurrentUser();
                    if (currentUser && currentUser.userId) {
                        const avatarFileName = `avatars/${currentUser.userId}/avatar.png`;
                        const url = await getPresignedUrl(avatarFileName);
                        const response = await fetch(url);
                        const imageBlob = await response.blob();
                        const localUrl = URL.createObjectURL(imageBlob);
                        setAvatarUrl(localUrl);
                    }
                }
            } catch (error) {
                console.error('Initialization error:', error);
                setLoggedIn(false);
                setAvatarUrl(''); // Optionally reset avatarUrl on error
            }
        }
        initializeAuth();

        // Cleanup function to revoke the avatar URL
        return () => {
            if (avatarUrl) URL.revokeObjectURL(avatarUrl);
        };
    }, []);

    useEffect(() => {
        const fetchAvatar = async () => {
            try {
                const currentUser = await getCurrentUser();
                if (currentUser && currentUser.userId) {
                    const avatarFileName = `avatars/${currentUser.userId}/avatar.png`;
                    const url = await getPresignedUrl(avatarFileName);
                    const response = await fetch(url);
                    const imageBlob = await response.blob();
                    const localUrl = URL.createObjectURL(imageBlob);
                    setAvatarUrl(localUrl);
                }
            } catch (error) {
                console.error("Error fetching user's avatar:", error);
            }
        };
        fetchAvatar();

        return () => {
            if (avatarUrl) URL.revokeObjectURL(avatarUrl) //dodge memory leaks and revoke URL
        };
    }, [])

    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn, login, logout, avatarUrl, setAvatarUrl }}>
            {children}
        </AuthContext.Provider>
    )
}

/**
 * Custom hook to access the authentication context.
 * 
 * This hook provides a convenient way to access and use the authentication context's values.
 * It returns the 'loggedIn' state and the 'setLoggedIn' function.
 */
export const useAuth = () => useContext(AuthContext)