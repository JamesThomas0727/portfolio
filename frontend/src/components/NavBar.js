/**
 * Author: James Thomas
 * Date: 2024/12/28
 * Description: Component for top navigation bar.
 */

import React, { useState } from 'react'
import { Divider, Drawer, Avatar, AppBar, Toolbar, List, ListItem, ListItemButton, ListItemText, Button, CssBaseline, Typography, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = ["About", "Skills", "Experience", "Education", "Contact"];
const drawerWidth = 240;

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography sx={{ my: 2 }}>
                James Thomas
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{
                backgroundColor: 'transparent'
            }}>
                <Toolbar sx={{
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            flexGrow: 1,
                            left: '40px',
                            justifyContent: 'left',
                            mr: 2, display: { sm: 'none' },
                            color: 'gray',
                            component: 'div'
                        }}>
                        <MenuIcon />
                    </IconButton>
                    <IconButton
                        sx={{
                            p: 0,
                            marginRight: '30px',
                            '&:hover': {
                                transform: 'scale(1.2, 1.2)',
                                background: 'none',
                            },
                        }}>
                        <Avatar alt="James Thomas" src="/assets/images/avatars/avatar1.png" />
                    </IconButton>
                    <Box sx={{
                        display: { xs: 'none', sm: 'block' },
                    }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{
                                color: 'gray',
                                textTransform: 'none',
                                '&:hover': {
                                    color: 'blue',
                                    transform: 'scale(1.05, 1.05)',
                                    backgroundColor: 'transparent',
                                },
                                '&:active': {
                                    backgroundColor: 'transparent',
                                },
                            }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

export default DrawerAppBar;