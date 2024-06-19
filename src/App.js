import React, { useEffect } from 'react';
import './App.css';
import HorizontalNavBar from './pages/Layout';
import Projects from './pages/Projects';
import About from './pages/About';
import ContactMe from './pages/ContactMe';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<HorizontalNavBar />}>
            <Route index element={<About />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="ContactMe" element={<ContactMe />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;