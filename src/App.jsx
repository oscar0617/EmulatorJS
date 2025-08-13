import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/home.jsx';
import Aa from './components/aa.jsx';
import Botones from './components/Botones.jsx';

function App() {
  return (
    <div className='principal'>
      <Home />
      <Botones />
      <Routes>
        <Route path="/1" element={<Aa src="/final.html"/>}/>
        <Route path="/2" element={<Aa src="/final1.html"/>} />
        <Route path="/3" element={<Aa src="/final2.html"/>} />
        <Route path="/4" element={<Aa src="/final3.html"/>} />
        <Route path="/5" element={<Aa src="/final4.html"/>} />
        <Route path="/6" element={<Aa src="/final5.html"/>} />
        <Route path="/7" element={<Aa src="/final6.html"/>} />
        <Route path="/8" element={<Aa src="/final7.html"/>} />

      </Routes>
    </div>
  );
}

export default App;