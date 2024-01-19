import { AuthenticatedHome, UnauthenticatedHome } from '@/src/components/Home'
import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

/**
 * HomePage component - Renders a dynamic homepage based on the user's authentication status.
 * 
 * @param {any} loggedIn - A boolean state that indicates whether the user is logged in or not.
 * 
 * The HomePage component displays a custom HomepageSplash when the user is logged in,
 * otherwise it renders the SignUp component. It uses the 'loggedIn' prop to determine
 * the user's authentication status and conditionally renders content based on it.
 * 
 * @returns {JSX.Element} - The rendered component.
 */
const HomePage = ({ loggedIn }: any) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div>
      {loggedIn ? <AuthenticatedHome/> : <UnauthenticatedHome />}
    </div>
  )
}

export default HomePage
