/**
 * Author: James Thomas
 * Date: 2024/12/29
 * Description: Component for profile page (about me)
 */

import React from 'react';
import { Box, Typography, Chip } from '@mui/material';

const Profile = (props) => {
    const skills = props.skills;
    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <Box
                sx={{
                    width: 150,
                    height: 150,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    boxShadow: 3,
                    margin: '20px',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        margin: '20px',
                    }}
                    className="text-red-500 text-sm md:text-base max-w-2xl my-5 py-5"
                >
                    About
                </Typography>
                <img
                    src="assets/images/avatars/avatar1.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </Box>
            <Typography variant="h4" component="h1" className="mb-2 my-5 text-gray-800">
                James Thomas
            </Typography>
            <Typography variant="h5" className="text-gray-600 text-center mb-4">
                {`I am a senior web developer with over six years of experience designing and implementing high-quality, scalable, and user-focused web applications. 
                Proficient in all major web frameworks, including React, Angular, and Vue.js, I excel at delivering responsive, optimized, and maintainable solutions tailored to meet diverse business requirements.

                My expertise spans front-end and back-end development, UI/UX design, and performance optimization. I have a proven track record of enhancing application efficiency, streamlining workflows, and driving business growth through innovative solutions. Known for my collaborative mindset, I thrive in team-oriented environments and excel at mentoring junior developers to strengthen team capabilities.

                I am passionate about leveraging cutting-edge technologies to solve complex problems and create seamless digital experiences.`}
            </Typography>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2">
                {skills.map((item, index) => (
                    <Chip
                        key={index}
                        label={item.skill}
                        color="primary"
                        variant="outlined"
                        className="text-sm"
                    />
                ))}
            </div>
        </div>
    );
};

export default Profile;
