import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Profile from '../components/Profile';
import WorkProcess from '../components/WorkProcess';
import Blog from '../components/Blog';
import Portfolio from '../components/Portfolio';
import Project from '../components/Project';
import UserExp from '../components/UserExp';
import Happyclients from '../components/Happyclients';
import Testimonial from '../components/Testimonial';
import ProjectForm from '../components/ProjectForm';
import Footer from '../components/Footer';

const Homepage = () => {
    return (
        <>
        <Banner/>
        <Profile/>
        <WorkProcess/>
        <Portfolio/>
        <Project/>
        <Blog/>
        <UserExp/>
        <Happyclients/>
        <Testimonial/>
        </>
    );
};

export default Homepage;