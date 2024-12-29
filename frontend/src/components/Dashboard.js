/**
 * Author: James Thomas
 * Date: 2024/12/28
 * Description: Component of dashboard page.
 */
import React, { useRef } from "react";
import { Typography, Button, IconButton, } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import ScrollButton from './ScrollButton';
import TooltipWrapper from "./TooltipWrapper";


const Dashboard = () => {
    const posRef = useRef(null);
    const handleClick = (ref) => {
        posRef.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="min-h-screen relative flex flex-row justify-center items-center bg-gradient-to-r from-blue-400 to-purple-500 border-none">
            <div className="flex flex-col items-center justify-center text-center my-5 py-20">
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
                    <TooltipWrapper tooltipText={'On GitHub'}>
                        <IconButton
                            className="!bg-white text-white hover:!bg-gray-400 w-14 h-14"
                            aria-label="GitHub"
                        >
                            <GitHubIcon className="text-3xl" />
                        </IconButton>
                    </TooltipWrapper>
                    <TooltipWrapper tooltipText={'On Gmail'}>
                        <IconButton
                            className="!bg-white text-white hover:!bg-gray-400 w-14 h-14"
                            aria-label="Email"
                        >
                            <EmailIcon className="text-3xl" />
                        </IconButton>
                    </TooltipWrapper>
                    <TooltipWrapper tooltipText={'On direct message'}>
                        <IconButton
                            className="!bg-white text-white hover:!bg-gray-400 w-14 h-14"
                            aria-label="Message"
                            onClick={() => { handleClick('contact') }}
                        >
                            <MessageIcon className="text-3xl" />
                        </IconButton>
                    </TooltipWrapper>
                </div>
            </div>
            <ScrollButton />
        </div>
    );
};

export default Dashboard;