import React, { useEffect } from 'react'
import { getCurrentUser } from 'aws-amplify/auth'

/**
 * LogIn component - Used for managing login functionality and displaying relevant UI.
 *
 * The LogIn component is responsible for handling user login logic. It checks the user's
 * authentication status on component mount using the `useEffect` hook. The `checkAuthStatus`
 * function attempts to retrieve the current user and logs their status. If the user is not
 * signed in, it logs an error.
 *
 * This component also contains a splashOverrides object to customize the styling and content
 * of a potential splash screen, but currently, the return statement renders an empty div.
 * Future implementations can utilize this object to render a more dynamic UI based on the
 * login state or other conditions.
 *
 * @returns {JSX.Element} - The rendered component.
 */
const LogIn = () => {

  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    try {
      const user = await getCurrentUser()
      console.log('User is signed in:', user)
    } catch (error) {
      console.error('User is not signed in:', error)
    }
  }

  const splashOverrides = {
    Heading: { style: { color: 'blue' } },
    Body: { style: { fontSize: '16px' } },
    image: { style: { width: '100px' }, src: './HomePageSplashImage.png' },
  }

  return (
    <div></div>
  )
}

export default LogIn