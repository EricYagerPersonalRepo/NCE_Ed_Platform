import { NextRouter } from 'next/router'

export interface SignUpProps {
    loggedIn: boolean
    isMobile: boolean
    router: NextRouter
}