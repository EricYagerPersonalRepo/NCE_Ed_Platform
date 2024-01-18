import { useAuth } from "@/src/state/AuthGlobalState";
import { useEffect } from "react";

export default function SignUp() {
  const { loggedIn, setLoggedIn } = useAuth()

  useEffect(() => {
    console.log(loggedIn)
  }, [loggedIn])

  return (
    <div>
      <h1>Student Profile</h1>
    </div>
  )
}