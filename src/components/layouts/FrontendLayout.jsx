import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router';
import ProjectForm from '../ProjectForm';

const FrontendLayout = () => {
    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <ProjectForm/>
            <Footer/>
        </>
    );
};

export default FrontendLayout;