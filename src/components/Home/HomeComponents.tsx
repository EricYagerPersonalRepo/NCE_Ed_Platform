import { getFullHeightStyle, getHalfWidthStyle } from "@/src/style/HomeStyle"
import { ArrowDownward } from "@mui/icons-material"
import { useRouter } from 'next/router'
import { Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material"



export const HomeSplash_Web_Authenticated = () => {
    return(
        <div>Web Authenticated</div>
    )
}

export const HomeSplash_Mobile_Authenticated = () => {
    return(
        <div>Mobile Authenticated</div>
    )
}

/**
 * HomeSplash_Web_Unauthenticated component - Renders a full-screen splash for unauthenticated web users.
 *
 * This component uses Material-UI's `useTheme` hook to apply consistent styling and spacing
 * according to the theme of the application. It defines a full-screen view with a vertical split layout.
 * The content is aligned to start at the top with a slight vertical padding and centered horizontally.
 * Each side of the split layout takes up half the width of the viewport.
 *
 * The left half of the split layout contains a sales pitch component, while the right half
 * contains an image. Both halves are centered within their respective grid items and have
 * consistent padding based on the theme settings.
 *
 * @returns {JSX.Element} - The rendered splash component for the unauthenticated homepage on web view.
 */
export const HomeSplash_Web_Unauthenticated = () => {
    const theme = useTheme()
    const fullHeightStyle = getFullHeightStyle(theme)
    const halfWidthStyle = getHalfWidthStyle(theme)
    
    return (
        <div style={fullHeightStyle}>
            <Grid container>
                <Grid item md={6} style={halfWidthStyle}>
                    <HomePageSalesPitch />
                </Grid>
                <Grid item md={6} style={halfWidthStyle}>
                    <div style={{ width: '100%', height: '100%' }}>
                        <HomePageImage_Web />
                    </div>
                </Grid>
            </Grid>
        </div>
  )
}

/**
 * HomeSplash_Mobile_Unauthenticated Component - Displays the unauthenticated homepage splash for mobile devices.
 * 
 * This component is responsible for rendering the homepage splash specifically tailored for mobile users who are not authenticated. 
 * It uses Material-UI's Grid layout to organize the content into two sections, each occupying full width on mobile screens.
 * The first Grid item contains the HomePageImage_Web component, representing a visual element or banner that is central to the 
 * homepage design. This component is styled to occupy the full width and height available to it.
 * 
 * The second Grid item includes the HomePageSalesPitch component, which provides a persuasive or informative text about the services 
 * or features offered. This is typically a call to action or an introductory message to engage new visitors.
 * The halfWidthStyle, derived from the theme, ensures consistent styling and spacing as per the design requirements. 
 * The layout adjusts dynamically to mobile screen sizes, ensuring an optimal user experience on smaller devices.
 *
 * @returns {JSX.Element} - The rendered mobile unauthenticated homepage splash component.
 */
export const HomeSplash_Mobile_Unauthenticated = () => {
    const theme = useTheme()
    const halfWidthStyle = getHalfWidthStyle(theme)
    return(
        <div>
            <Grid container>
                <Grid item xs={12} md={12} style={halfWidthStyle}>
                    <div style={{ width: '100%', height: '100%' }}>
                        <HomePageImage_Web />
                    </div>
                </Grid>
                <Grid item xs={12} md={12} style={halfWidthStyle}>
                    <HomePageSalesPitch />
                </Grid>
            </Grid>
        </div>
    )
}

/**
 * HomePageSalesPitch component - Displays the main sales pitch on the homepage.
 *
 * This component dynamically adjusts the size of the text and buttons based on the screen size.
 * It uses Material-UI's `useTheme` and `useMediaQuery` hooks to determine if the screen is medium
 * or larger and adjusts the styles accordingly. The text content emphasizes the importance of STEM
 * education in the New York North Country area and promotes the platform's hybrid training approach.
 * Two buttons provide calls to action for signing up or learning more about the offered programs.
 *
 * @returns {JSX.Element} - The rendered component containing the sales pitch with responsive typography and buttons.
 */
export const HomePageSalesPitch = () => {

    // Conditional styles for text and buttons based on screen size
    const theme = useTheme()
    const largeScreen = useMediaQuery(theme.breakpoints.up('md'))
    const textVariant = largeScreen ? 'h4' : 'h6'
    const buttonSize = largeScreen ? 'large' : 'medium'
    const router = useRouter()

    const handleSignUpClick = () => {
        router.push('/SignUp');
    }

    return(
        <>
            <Typography variant={textVariant} gutterBottom>
                We need STEM workers in NNY
            </Typography>
            <Typography>
                The north country is an awesome place to live, but as investments come in to New York focused on STEM its vital that we level up as a community. Starting with basic programming, our hybrid live and virtual training is intended to take people with minimal technical skills to a basic understanding of software programming. As we build our course offerings we will branch out into additional skill fields and certification pathways.
            </Typography>

            <Button 
                variant="contained" 
                size={buttonSize} 
                sx={{ mt: 2, width: '100%' }}
                onClick={handleSignUpClick}>
                Sign Up
            </Button>
            <Button variant="outlined" size={buttonSize} sx={{ mt: 2, width: '100%' }}>
                Learn More
                <ArrowDownward />
            </Button>
        </>
    )
}

/**
 * Component for displaying the authentication header image.
 * 
 * This is a simple component that renders an image, specifically used in the 
 * authentication header. It has a predefined style for size and display properties.
 */
export const HomePageImage_Web = () => {
    return(
        <img
            src="/learningHomepageImage.jpg"
            alt="NCE Schoolhouse"
            style={{width:"100%"}}
        />
    )
}
