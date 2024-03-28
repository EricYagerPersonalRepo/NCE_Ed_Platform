import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { amplifyApiClient } from '@/src/functions/AuthX';
import { createCourse } from '@/src/graphql/mutations';
import { CourseSubject } from '@/src/API';

const CourseManagement = ({ userData }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [subject, setSubject] = useState<CourseSubject | ''>('');
    const [difficulty, setDifficulty] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Ensure subject is not an empty string before proceeding
        if (subject === '') {
            alert('Please select a subject');
            return;
        }

        const courseData = {
            title,
            description,
            subject,
            difficulty,
            creator: userData.cognitoID, // Automatically populate creator field
        };

        try {
            const response = await amplifyApiClient.graphql({
                query: createCourse,
                variables: { input: courseData }
            });
            console.log('Course creation response:', response);
        } catch (error) {
            console.error('Error creating course:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <TextField
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <TextField
                label="Description"
                variant="outlined"
                multiline
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <FormControl variant="outlined" required>
                <InputLabel>Subject</InputLabel>
                <Select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value as CourseSubject)}
                    label="Subject"
                >
                    {/* Dynamically generate menu items from CourseSubject enum */}
                    {Object.keys(CourseSubject).map((key) => (
                        <MenuItem key={key} value={CourseSubject[key]}>
                            {CourseSubject[key]}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                label="Difficulty"
                variant="outlined"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
            />
            <TextField
                label="Creator"
                variant="outlined"
                value={userData.email}
                disabled
            />
            <Button type="submit" variant="contained" color="primary">
                Create Course
            </Button>
        </form>
    );
};

export default CourseManagement;
