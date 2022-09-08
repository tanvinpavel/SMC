import React from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import AOS from 'aos';

const Layout = () => {
    AOS.init();
    return (
        <>
            <main className="p-7 font-semibold flex-1 full-content-height overflow-y-auto">
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default Layout;