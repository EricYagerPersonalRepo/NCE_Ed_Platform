
import { MobileStudentProfile, WebStudentProfile } from "@/src/components/StudentProfile"
import { useRouter } from "next/router"
import { useEffect } from "react"

const StudentProfile = ({loggedIn, isMobile}:any) => {
  return isMobile ? <MobileStudentProfile /> : <WebStudentProfile />
}

export default StudentProfile