import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { checkAuthStatus } from '../functions/AuthX'
import { getCurrentUser } from 'aws-amplify/auth';
import { getPresignedUrl } from '../functions/Amplify';
import { uploadFileToS3 } from '../functions/Storage';

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
    avatarUrl: '',
    setAvatarUrl: () => {}
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
 * Custom hook to access the authentication context.
 * 
 * This hook provides a convenient way to access and use the authentication context's values.
 * It returns the 'loggedIn' state and the 'setLoggedIn' function.
 */
export const useAuth = () => {
    console.log("useAuth call attempted")
    const userContext = useContext(AuthContext)
    return(userContext)
}