/**
 * Author: James Thomas
 * Date: 2024/12/28
 * Description: Component of dashboard page.
 */
import React from "react";
import { Typography, Button, IconButton, } from "@mui/material";
import ScrollButton from './ScrollButton'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Dashboard = () => {
    return (
        <div className="min-h-screen relative bg-gradient-to-r from-blue-400 to-purple-500 border-none">
            <div className="flex flex-col items-center justify-center text-center py-20">
                <Typography
                    variant="h2"
                    className="text-white font-bold text-4xl md:text-5xl mb-4"
                >
                    James Thomas
                </Typography>
                <Typography
                    variant="h6"
                    className="text-white font-medium text-lg md:text-xl mb-6"
                >
                    Full-stack Developer
                </Typography>
                <Typography
                    variant="body1"
                    fontSize={'xl'}
                    className="text-gray-200 text-sm md:text-base max-w-2xl mb-8"
                >
                    I would like to collaborate with you.
                </Typography>
                <div className="flex  justify-center space-x-4 mt-9 top-10">
                    <Button
                        sx={{
                            textTransform: 'none',
                        }}
                        variant="contained"
                        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg"
                    >
                        Projects
                    </Button>
                    <Button
                        sx={{
                            textTransform: 'none',
                        }}
                        variant="contained"
                        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg"
                    >
                        About Me
                    </Button>
                </div>
                <div className="flex justify-center space-x-4 mt-10">
                    <IconButton
                        className="!bg-white text-white hover:!bg-gray-400 w-14 h-14"
                        aria-label="GitHub"
                    >
                        <GitHubIcon className="text-3xl" />
                    </IconButton>
                    <IconButton
                        className="!bg-white text-white hover:!bg-gray-400 w-14 h-14"
                        aria-label="Email"
                    >
                        <EmailIcon className="text-3xl" />
                    </IconButton>
                    <IconButton
                        className="!bg-white text-white hover:!bg-gray-400 w-14 h-14"
                        aria-label="LinkedIn"
                    >
                        <LinkedInIcon className="text-3xl" />
                    </IconButton>
                </div>
            </div>
            <ScrollButton />
        </div>
    );
};

export default Dashboard;
