import React from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Project from './ProjectComponent';
import {Routes, Route } from 'react-router-dom';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import Blog from './BlogComponent';
import { useComments } from '../State/confusion';
import { useBlogs } from '../State/confusion';

export default function Main()
{
    
  const [blogs] = useBlogs();
  const [comments] = useComments();

    return (
        <>
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/projects' element={<Project/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/blog' element={<Blog  blogs={blogs} comments={comments}/>}/>
                <Route path='/about' element={<About/>} />
            </Routes>
            <Footer/>
        </div>
        </>
    );
};
