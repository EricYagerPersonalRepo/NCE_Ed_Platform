
import { MobileStudentProfile, WebStudentProfile } from "@/src/components/StudentProfile"

/**
 * StudentProfile Component - Adapts the student profile view based on the device type.
 * 
 * This component serves as a conditional wrapper that renders different layouts for the student profile
 * depending on whether the application is being viewed on a mobile device or a desktop. It uses the `isMobile`
 * prop to determine the type of device and renders `MobileStudentProfile` for mobile devices and
 * `WebStudentProfile` for desktops. The `avatarUrl` prop is passed to the `WebStudentProfile` component to
 * display the user's avatar on desktop views.
 * 
 * @param {any} isMobile - A boolean indicating whether the application is being viewed on a mobile device.
 * @param {any} avatarUrl - The URL of the user's avatar image, passed to the desktop view for rendering.
 * 
 * @returns {JSX.Element} - The student profile view appropriate for the current device, either mobile or desktop.
 */
const StudentProfile = ({isMobile, userData, avatarUrl}:any) => {
  return isMobile ? <MobileStudentProfile /> : <WebStudentProfile userID={userData.cognitoID} avatarUrl={avatarUrl}/>
}

export default StudentProfile