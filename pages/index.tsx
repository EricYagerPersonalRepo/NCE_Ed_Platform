import { AuthenticatedHome, UnauthenticatedHome } from '@/src/components/Home'
import React from 'react'

/**
 * HomePage Component - Renders the homepage based on user authentication status and screen size.
 * 
 * The HomePage component serves as the entry point for the application's homepage. It determines
 * the content to render based on the user's authentication status (represented by the 'loggedIn' prop)
 * and screen size (represented by the 'isMobile' prop). When the user is logged in, it renders the
 * AuthenticatedHome component, tailored to the screen size. Otherwise, it displays the UnauthenticatedHome
 * component, which also adapts to the screen size.
 * 
 * @param {any} loggedIn - A boolean indicating the user's authentication status.
 * @param {any} isMobile - A boolean indicating whether the screen size is mobile.
 * 
 * @returns {JSX.Element} - The rendered homepage, either authenticated or unauthenticated, adapted to the screen size.
 */
const HomePage = ({ loggedIn, isMobile }: any) => {
  return loggedIn ? <AuthenticatedHome isMobile={isMobile}/> : <UnauthenticatedHome isMobile={isMobile}/>
}

export default HomePage