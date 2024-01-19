import { Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material"
import { AuthenticationHeaderImage } from "../AuthComponents"

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

export const HomeSplash_Web_Unauthenticated = () => {
    const theme = useTheme()
    const largeScreen = useMediaQuery(theme.breakpoints.up('md'))

    const fullHeightStyle: React.CSSProperties = {
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const halfWidth: React.CSSProperties = {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: theme.spacing(4),
    }

    // Conditional styles for text and buttons based on screen size
    const textVariant = largeScreen ? 'h3' : 'h5'
    const buttonSize = largeScreen ? 'large' : 'medium'

    return (
        <div style={fullHeightStyle}>
            <Grid container>
                <Grid item md={6} style={halfWidth}>
                <Typography variant={textVariant} gutterBottom>
                    Learn the skills The North Country needs
                </Typography>
                <Typography>
                    Embrace the digital revolution and start learning the programming skills needed to propel the NY North Country into a future rich with opportunity. With our tailored educational pathways, you can transform the local landscape into a hub for innovation and tech-driven growth. Join us in forging a vibrant digital ecosystem that nurtures talent, creativity, and community progress.
                </Typography>

                <Button variant="contained" size={buttonSize} sx={{ mt: 2 }}>
                    Sign Up
                </Button>
                <Button variant="outlined" size={buttonSize} sx={{ mt: 2 }}>
                    Learn More
                </Button>
                </Grid>
                <Grid item md={6} style={halfWidth}>
                {/* Here you would place your image */}
                <div style={{ width: '100%', height: '100%', backgroundColor: 'lightgrey' }}>
                    <HomePageImage_Web />
                </div>
                </Grid>
            </Grid>
        </div>
  )
}

export const HomeSplash_Mobile_Unauthenticated = () => {
    return(
        <div>Mobile Unauthenticated</div>
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
