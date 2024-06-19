import React, { useEffect } from 'react';
import './App.css';
import HorizontalNavBar from './components/Layout';
import Projects from './components/Projects';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<HorizontalNavBar />}>
            <Route index element={<About />} />
            <Route path="ContactMe" element={<About />} />
            <Route path="Projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;