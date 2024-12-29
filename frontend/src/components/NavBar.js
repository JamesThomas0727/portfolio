/**
 * Author: James Thomas
 * Date: 2024/12/28
 * Description: Component for top navigation bar.
 */

import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    CssBaseline,
    Box,
    Button,
    Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = ["About", "Skills", "Experience", "Education", "Contact"];

const NavBar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <div className="fixed w-full z-50">
            <CssBaseline />
            <AppBar position="static"
                className="bg-gray-800">
                <Toolbar>
                    <IconButton
                        sx={{
                            '&:hover': {
                                transform: 'scale(1.05, 1.05)',
                            },
                        }}
                        onClick={() => { window.location.href = '/' }}
                        edge="start" color="inherit" aria-label="logo">
                        <Avatar src='assets/images/avatars/avatar1.png' alt='James Thomas' />
                    </IconButton>
                    <Typography
                        variant="h6"
                        className="flex-1 text-white font-bold text-lg"
                        sx={{
                            '&:hover': {
                                color: '#2dd4bf',
                                cursor: 'pointer',
                            },
                        }}
                        onClick={() => { window.location.href = '/' }}
                    >
                        James Thomas
                    </Typography>
                    <div className="hidden md:flex space-x-4">
                        {navItems.map((item) => {
                            return (
                                <Button
                                    sx={{
                                        textTransform: 'none',
                                        '&:hover': {
                                            transform: 'scale(1.05, 1.05)',
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                    key={item}
                                    color="inherit" className="hover:text-teal-400">
                                    {item}
                                </Button>
                            )
                        })}
                    </div>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                        sx={{
                            display: {
                                sm: 'block',
                            },
                            '@media (min-width: 768px)': {
                                display: 'none',
                            },
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                    className="bg-gray-100"
                >
                    <List>
                        {navItems.map((text, index) => (
                            <ListItem button key={index}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </div>
    );
};

export default NavBar;
