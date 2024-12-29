/**
 * Author: James Thomas
 * Date: 2024/12/27
 * Description: Component of loading page.
 */
import React from 'react'
import { CircularProgress, Typography } from '@mui/material'
export default function LoadingPage() {
    return (
        <div className='min-h-screen relative flex flex-row justify-center items-center border-none z-[100]'>
            <CircularProgress />
            &nbsp;
            &nbsp;
            &nbsp;
            <Typography
                fontSize={'lg'}>
                Loading...
            </Typography>
        </div>
    )
}
