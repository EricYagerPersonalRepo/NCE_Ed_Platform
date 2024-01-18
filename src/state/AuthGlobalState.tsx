import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { checkAuthStatus } from '../functions/AuthFunctions'

/**
 * Type definition for the AuthContext.
 * 
 * It includes the current logged-in status (loggedIn) and a function to update this status (setLoggedIn).
 * 'loggedIn' is a boolean value indicating whether the user is currently logged in.
 * 'setLoggedIn' is a function to update the 'loggedIn' state.
 */
interface AuthContextType {
    loggedIn: boolean
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * Context for user authentication.
 * 
 * This context provides a way to share the user's logged-in status across the application.
 * It contains a default state with 'loggedIn' set to false and a placeholder function for 'setLoggedIn'.
 */
const AuthContext = createContext<AuthContextType>({ loggedIn: false, setLoggedIn: () => {} })

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
 * Provides user authentication context to child components.
 * 
 * This component is responsible for managing the authentication state of the user.
 * It fetches the current authentication status on mount and provides this state to its children.
 * 
 * @param {AuthProviderProps} props - The props passed to the component.
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        async function checkAndSetAuthStatus() {
            try {
                const isUserLoggedIn = await checkAuthStatus()
                setLoggedIn(isUserLoggedIn)
            } catch (error) {
                console.error('Failed to check authentication status:', error)
                setLoggedIn(false)
            }
        }
        checkAndSetAuthStatus()
    }, [])

    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
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