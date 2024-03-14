import { useRouter } from "next/router";

const courseHomepage = () => {
    const router = useRouter();
    const { courseID } = router.query
    return(
        <div>Course Home for {courseID} </div>
    )
}

export default courseHomepage