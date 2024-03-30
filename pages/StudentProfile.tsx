
import { MobileStudentProfile, WebStudentProfile } from "@/src/components/StudentProfile"
import { useEffect, useState } from "react"

const initialUserData = {
    email: "",
    cognitoID: "",
    name: "",
    darkModeEnabled: false,
    language: "",
    notificationsEnabled: true
}

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
const StudentProfile = ({ isMobile, userData, avatarUrl }: any) => {
  const [studentProfileData, setStudentProfileData] = useState({
      id: '',
      email: '',
      name: '',
  })
  const [userSettingsData, setUserSettingsData] = useState({
      id: '',
      darkModeEnabled: false,
      language: 'en',
      notificationsEnabled: false,
      isAdmin: false,
  })

  useEffect(() => {
    if(userData!==initialUserData) {
        console.log("USER DATA: ", userData)

        setStudentProfileData({
            id: userData.id,
            email: userData.email,
            name: userData.name,
        })

        setUserSettingsData({
            id: userData.id, 
            darkModeEnabled: userData.darkModeEnabled,
            language: userData.language,
            notificationsEnabled: userData.notificationsEnabled,
            isAdmin: userData.isAdmin,
        })
    }
  },[userData])

  return isMobile ? 
      <MobileStudentProfile studentProfile={studentProfileData} userSettings={userSettingsData} /> : 
      <WebStudentProfile userID={userData.cognitoID} avatarUrl={avatarUrl} studentProfile={studentProfileData} userSettings={userSettingsData} />
}

export default StudentProfile