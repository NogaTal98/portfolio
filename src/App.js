import React from 'react';
import './App.css';
import HorizontalNavBar from './components/HorizontalNavBar';
import Projects from './components/Projects';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<HorizontalNavBar />}>
            <Route index element={<div />} />
            <Route path="About" element={<About />} />
            <Route path="Projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;