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
const HomePage = ({ loggedIn }:any) => {

  // Example overrides
  const splashOverrides = {
    Heading: { style: { color: 'blue' } },
    Body: { style: { fontSize: '16px' } },
    image: { style: { width: '100px' }, src: './HomePageSplashImage.png' },
  }

  return (
    <div>
       
    </div>
  )
}

export default HomePage

