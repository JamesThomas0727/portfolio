/**
 * Author: James Thomas
 * Date: 2024/12/28
 * Description: Component of dashboard page.
 */
import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button, IconButton, } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';

import ScrollButton from './ScrollButton';
import TooltipWrapper from "./TooltipWrapper";
import scrollToPosition from "../utils/ScrollToPosition";
const Dashboard = (props) => {
    const contacts = props.contacts;

    const handleClick = (id) => {
        scrollToPosition(id);
    }

    const mailTo = () => {
        const url = contacts[0].type === 'gmail' ? contacts[0].url : contacts[1].url;
        window.location.href = (`mailto:${url}`)
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
                    variant="h5"
                    className="text-white font-medium text-lg md:text-xl mb-6"
                >
                    Full-stack Developer
                </Typography>
                <Typography
                    variant="h6"
                    className="text-blue-800 text-sm md:text-base max-w-2xl mb-8"
                >
                    I would like to collaborate with you.
                </Typography>
                <div className="flex  justify-center space-x-4 mt-9 top-10">
                    <Button
                        onClick={() => { handleClick('projects') }}
                        sx={{
                            textTransform: 'none',
                        }}
                        variant="contained"
                        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg"
                    >
                        Projects
                    </Button>
                    <Button
                        onClick={() => { handleClick('about') }}
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
                            onClick={() => {
                                window.open(contacts[1].type === 'github' ? contacts[1].url : contacts[0].url);
                            }}
                        >
                            <GitHubIcon className="text-3xl" />
                        </IconButton>
                    </TooltipWrapper>
                    <TooltipWrapper tooltipText={'On Gmail'}>
                        <IconButton
                            className="!bg-white text-white hover:!bg-gray-400 w-14 h-14"
                            aria-label="Email"
                            onClick={mailTo}
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
