import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Correct if Navbar is in 'components' folder
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const App = () => {
  return (
    <div>
<Navbar/>
<HomePage/>
<Footer/>
<ScrollToTopButton/>
    </div>
    
  );
};

export default App;
