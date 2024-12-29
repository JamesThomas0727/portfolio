/**
 * Author: James Thomas
 * Date: 2024/12/30
 * Description: Component of resume download button
 */
import React from 'react';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const ResumeDownload = () => {
    return (
        <Button
            variant="contained"
            color="primary"
            href="/assets/profile/resume.txt" // Path to your resume file
            download="James Thomas.txt" // Suggested file name when downloaded
            startIcon={<DownloadIcon />}
            sx={{ mt: 2 }}
        >
            Download Resume
        </Button>
    );
};

export default ResumeDownload;