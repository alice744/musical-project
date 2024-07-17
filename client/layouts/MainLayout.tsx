import React from 'react';
import Navbar from '../components/NavBar';
import { Container } from '@mui/material';
import Player from '../components/Player';
import Head from 'next/head';

const MainLayout: React.FC = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container style={{ margin: '90px 0' }}>
                {children}
            </Container>
            <Player />
        </>
    );
};

export default MainLayout;