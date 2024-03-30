import React, { useEffect, useState } from 'react';
import CreateNewCourseDialog from '@/src/components/Instructor/Components';

const CourseManagement = ({ userData }) => {
    const [userDatum, setUserDatum] = useState({})

    useEffect(()=>{
        if(userData) {
            console.log("coursemanagement: ", userData)
            setUserDatum(userData)
        }
    },[userData])

    return (
        <CreateNewCourseDialog userData={userDatum} />
    );
};

export default CourseManagement;
