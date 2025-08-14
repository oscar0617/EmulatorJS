import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import Aa from './components/aa.jsx';
import Botones from './components/Botones.jsx';


function App() {
  return (
    <div className='principal'>
      <Home />
      <Botones />
      <Routes>
        <Route path="/1" element={<Aa src="/nes/final.html"/>}/>
        <Route path="/2" element={<Aa src="/nes/final1.html"/>} />
        <Route path="/3" element={<Aa src="/nes/final2.html"/>} />
        <Route path="/4" element={<Aa src="/nes/final3.html"/>} />
        <Route path="/5" element={<Aa src="/nes/final4.html"/>} />

        <Route path="/6" element={<Aa src="/snes/final1.html"/>} />
        <Route path="/7" element={<Aa src="/snes/final2.html"/>} />
        <Route path="/8" element={<Aa src="/snes/final3.html"/>} />
        <Route path="/9" element={<Aa src="/snes/final4.html"/>} />
        <Route path="/10" element={<Aa src="/snes/final5.html"/>} />

        <Route path="/11" element={<Aa src="/gbc/final1.html"/>} />
        <Route path="/12" element={<Aa src="/gbc/final2.html"/>} />
        <Route path="/13" element={<Aa src="/gbc/final3.html"/>} />

        <Route path="/14" element={<Aa src="/gba/final1.html"/>} />
        <Route path="/15" element={<Aa src="/gba/final2.html"/>} />
        <Route path="/16" element={<Aa src="/gba/final3.html"/>} />
      </Routes>
    </div>
  );
}

export default App;