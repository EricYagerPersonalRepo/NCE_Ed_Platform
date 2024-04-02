import React, { useEffect, useState } from 'react';
import { InstructorDashboard } from '@/src/components/Instructor/Components';

const CourseManagement = ({ userData }) => {
    const [userDatum, setUserDatum] = useState({})

    useEffect(()=>{
        if(userData) {
            console.log("coursemanagement: ", userData)
            setUserDatum(userData)
        }
    },[userData])

    return (
        <InstructorDashboard userData={userDatum} />
    );
};

export default CourseManagement;
