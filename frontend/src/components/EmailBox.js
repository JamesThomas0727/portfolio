/**
 * Author: James Thomas
 * Date: 2024/12/28
 * Description: Component of email box.
 */
import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import axios from 'axios'
const EmailBox = () => {

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('https://localhost:5000/send-mail', formData)
            .then(res => {
                if (res.ok) {
                    setSuccess(true);
                    setFormData({ name: '', email: '', message: '' });
                }
                else {
                    setError("Failed to send email:" + res.data);
                }
            })
            .catch(err => {
                setError("Failed to send email: " + error);
            })
    };

    return (
        <div className="max-h-fit border-none flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
            <Box
                className="bg-white p-8 rounded-lg shadow-md w-full"
                sx={{
                    margin: '100px',
                    border: 'none',
                    maxWidth: {
                        md: "50%",
                        lg: "40%",
                    },
                    '@media (max-width: 768px)': {
                        maxWidth: "100%",
                        margin: '25px',
                    },
                }}
            >
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                    Please, Let me know!
                </h2>
                <form id="contactForm" action="/send-message" method="POST">
                    <div className="mb-4">
                        <TextField
                            id="name"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            className="mb-4"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <TextField
                            id="email"
                            label="Email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            className="mb-4"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <TextField
                            id="message"
                            label="Message"
                            multiline
                            rows={4}
                            variant="outlined"
                            fullWidth
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                justifyContent: 'right',
                            }}
                            endIcon={<SendIcon />}
                            color="primary"
                            // fullWidth
                            onClick={handleSubmit}
                            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-lg transition duration-300"
                        >
                            Send
                        </Button>
                    </div>
                </form>
                {success && <p className="mt-4 text-green-600">Email was sent successfully!</p>}
                {error.length !== 0 && <p className="mt-4 text-red-600">{error}</p>}
            </Box>
        </div>
    );
};

export default EmailBox;
