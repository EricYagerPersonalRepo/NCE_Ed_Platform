import React from 'react';
import CreateNewCourseDialog from '@/src/components/Instructor/Components';

const CourseManagement = ({ userData }) => {
    return (
        <CreateNewCourseDialog userData={userData} />
    );
};

export default CourseManagement;
