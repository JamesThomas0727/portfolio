/**
 * Author: James Thomas
 * Date: 2024/12/28
 * Description: Component of email box.
 */
import React from "react";
import { TextField, Button, Box } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
const EmailBox = () => {
    return (
        <div className="max-h-fit border-none flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
            <Box
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
                sx={{
                    margin: '100px',
                    border: 'none',
                    maxWidth: "60%",
                }}
            >
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                    Please, Let me know!
                </h2>
                <form>
                    <div className="mb-4">
                        <TextField
                            id="name"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            className="mb-4"
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
                            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-lg transition duration-300"
                        >
                            Send
                        </Button>
                    </div>
                </form>
            </Box>
        </div>
    );
};

export default EmailBox;
