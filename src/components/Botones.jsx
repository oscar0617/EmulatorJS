import React from 'react';
import './Botones.css';
import { Link } from 'react-router-dom';

const Botones = () => {
  return (
    <div className='botones-container'>
      <Link to="/1">
        <button>SMB</button>
      </Link>
      <Link to="/2">
        <button>C</button>
      </Link>
      <Link to="/3">
        <button>PC</button>
      </Link>
      <Link to="/4">
        <button>T</button>
      </Link>
      <Link to="/5">
        <button>M</button>
      </Link>
      <Link to="/6">
        <button>BM</button>
      </Link>
      <Link to="/7">
        <button>OL</button>
      </Link>
      <Link to="/8">
        <button>OL</button>
      </Link>
      <Link to="/00">
        <button>Inicio</button>
      </Link>
    </div>
  );
};

export default Botones;