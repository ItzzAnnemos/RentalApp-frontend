import React from "react";
import { AppBar, Box, Toolbar, Typography, Container } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ mt: 'auto' }}>
            <AppBar position="static">
                <Toolbar>
                    <Container
                        maxWidth="lg"
                        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                        <Typography variant="body2" color="inherit">
                            © {new Date().getFullYear()} Rental App. All rights reserved.
                        </Typography>
                        <Typography variant="body2" color="inherit">
                            Contact: support@rentalapp.com
                        </Typography>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Footer;
