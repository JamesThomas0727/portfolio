/**
 * Author: James Thomas
 * Date: 2024/12/28
 * Description: Component for top navigation bar.
 */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Button, Typography, Box, IconButton } from '@mui/material';
import { MenuIcon } from '@mui/icons-material';

const navItems = ["About", "Skills", "Experience", "Education", "Contact"];
export default function NavBar(props) {
    const { window } = props;
    const [isMobile, setMobile] = useState(false);

    // useEffect(() => {
    //     setMobile(true);
    // }, [isMobile]);

    const handleToggle = (isMenu) => (!isMenu);

    return (
<>
            <div className='h-full text-black border-black border w-full p-8 bg-cyan-900'>5345354</div></>        
        // <Box
        //     className="flex-grow"
        //     onClick={handleToggle}>
            
        //     <AppBar
        //         sx={{backgroundColor: 'transparent'}}
        //         className='bg-black'>
        //         <div className='h-full border-black border w-full p-8 bg-cyan-900'>5345354</div>
        //         <Toolbar className='bg-black'>
        //             <div className='h-10 w-full p-8 bg-cyan-900'>5345354</div>
        //         </Toolbar>
        //     </AppBar>
        // </Box>
    )
}
