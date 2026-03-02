import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const SharedLayout = () => {
    return (
        <>
            <ScrollToTop />
            <TopBar />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default SharedLayout;
