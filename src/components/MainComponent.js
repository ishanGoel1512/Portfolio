import React from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Project from './ProjectComponent';
import {Routes, Route } from 'react-router-dom';
import About from './AboutComponent';
import Contact from './ContactComponent';

export default function Main()
{
    return (
        <>
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/projects' element={<Project/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/about' element={<About/>} />
            </Routes>
        </div>
        </>
    );
};
