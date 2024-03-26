
import { MobileStudentProfile, WebStudentProfile } from "@/src/components/StudentProfile"
import { amplifyApiClient } from "@/src/functions/AuthX"
import { getStudentProfile } from "@/src/graphql/queries"
import { useEffect, useState } from "react"

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
const StudentProfile = ({ isMobile, userData, avatarUrl, router }: any) => {
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
      const studentProfileCall = async () => {
          if (!userData.cognitoID) {
              return
          }

          try {
              console.log(`Fetching data for cognitoID: ${userData.cognitoID}`)
              const getStudentProfileCall = await amplifyApiClient.graphql({
                  query: getStudentProfile,
                  variables: {
                      id: userData.cognitoID,
                  },
              })

              const { id, email, name, darkModeEnabled, language, notificationsEnabled, isAdmin } = getStudentProfileCall.data.getStudentProfile

              setStudentProfileData({
                  id,
                  email,
                  name,
              })

              setUserSettingsData({
                  id, // Assuming id is the same for both studentProfile and userSettings
                  darkModeEnabled,
                  language,
                  notificationsEnabled,
                  isAdmin,
              })

          } catch (error) {
              console.error('Error fetching and setting data:', error)
          }
      }

      studentProfileCall()
  }, [userData.cognitoID])

  return isMobile ? 
      <MobileStudentProfile studentProfile={studentProfileData} userSettings={userSettingsData} /> : 
      <WebStudentProfile userID={userData.cognitoID} avatarUrl={avatarUrl} studentProfile={studentProfileData} userSettings={userSettingsData} />
}

export default StudentProfile