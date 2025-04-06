import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from './pages/Homepage';
import FrontendLayout from './components/layouts/FrontendLayout';
const About = lazy(() => import('./pages/About'));
const Process = lazy(() => import('./pages/Process'));
const Page404 = lazy(() => import('./pages/Page404'));
const Services = lazy(() => import('./pages/Services'));
const Test2 = lazy(() => import('./pages/Test2'));
const Test1 = lazy(() => import('./pages/Test1'));
const Blank = lazy(() => import('./pages/Blank'));
const AboutCnt = lazy(() => import('./pages/AboutCnt'));
const Banner = lazy(() => import('./components/Banner'));
const Profile = lazy(() => import('./components/Profile'));
// import About from './pages/About';
// import Process from './pages/Process';
// import Page404 from './pages/Page404';
// import Services from './pages/Services';
// import Test1 from './pages/Test1';
// import Test2 from './pages/Test2';
// import Blank from './pages/Blank';
// import Profile from './components/Profile';
// import Banner from './components/Banner';


const App = () => {
  return (
    
    <>
    <BrowserRouter>
    <Routes>

        <Route element={<FrontendLayout/>}>

        <Route path="/" element={<Homepage/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/about/:id' element={<AboutCnt/>}/>
        <Route path='/process' element={<Process/>} />
        <Route path='/service' element={<Services/>} >
            <Route path='service1' element={<Test1/>} />
            <Route path='service2' element={<Test2/>} />
        </Route>
        <Route path='/portfolio' element={<Banner/>} />
        <Route path='/blog' element={<Profile/>} />
        <Route path='/contact' element={<Blank/>} />

        </Route>


        






        <Route path='*' element={<Page404/>} />
    </Routes>
  </BrowserRouter>
    
    
    </>
  
  

  );
};

export default App;