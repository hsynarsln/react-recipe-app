import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import About from '../pages/about/About';
import Details from '../pages/details/Details';
import Home from '../pages/home/Home';
import Login from '../pages/Login/Login';

const AppRouter = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/details' element={<Details />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
