
import { MobileStudentProfile, WebStudentProfile } from "@/src/components/StudentProfile"


const StudentProfile = ({loggedIn, isMobile, userData}:any) => {
  const userID:any = userData.cognitoID
  console.log(userData)
  return isMobile ? <MobileStudentProfile /> : <WebStudentProfile userID={userID}/>
}

export default StudentProfile