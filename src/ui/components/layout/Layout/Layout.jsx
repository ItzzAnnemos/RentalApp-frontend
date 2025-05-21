import React from 'react';
import {Box, Container} from "@mui/material";
import Header from "../Header/Header.jsx";
import {Outlet} from "react-router";
import Footer from "../footer/Footer.jsx";

const Layout = () => {
    return (
        <Box className="layout-box"
             sx={{
                 display: "flex",
                 flexDirection: "column",
                 minHeight: "100vh"
             }}>
            <Header/>
            <Container className="outlet-container"
                       sx={{ my: 2, flexGrow: 1 }}
                       maxWidth="xl">
                <Outlet/>
            </Container>
            <Footer/>
        </Box>
    );
};

export default Layout;