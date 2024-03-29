import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Modal, Dialog, DialogContent, DialogTitle, useMediaQuery, useTheme } from '@mui/material';
import { amplifyApiClient } from '@/src/functions/AuthX';
import { createCourse } from '@/src/graphql/mutations';
import { CourseSubject } from '@/src/API';
import { DialogStyle } from '@/src/style/Components';
import CreateNewCourseDialog from '@/src/components/Instructor/Components';

const CourseManagement = ({ userData }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [subject, setSubject] = useState<CourseSubject | ''>('');
    const [difficulty, setDifficulty] = useState('');

    const theme = useTheme()

    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    

    return (
        <CreateNewCourseDialog userData={userData} />
    );
};

export default CourseManagement;
