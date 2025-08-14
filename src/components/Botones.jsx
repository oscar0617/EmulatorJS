import React from 'react';
import './Botones.css';
import { Link } from 'react-router-dom';

const Botones = () => {
  return (
    <div className='botones-container'>
      <div className='n'>
        <h2>N</h2>
        <div className='botones-j'>
          <Link to="/1">
            <button>SMB</button>
          </Link>
          <Link to="/2">
            <button>C</button>
          </Link>
          <Link to="/3">
            <button>SMB3</button>
          </Link>
          <Link to="/4">
            <button>PC</button>
          </Link>
          <Link to="/5">
            <button>T</button>
          </Link>
        </div>
      </div>
      <div className='n'>
        <h2>SN</h2>
        <div className='botones-j'>
          <Link to="/6">
            <button>SM</button> 
          </Link>
          <Link to="/7">
            <button>ST</button>
          </Link>
          <Link to="/8">
            <button>SMK</button>
          </Link>
          <Link to="/9">
            <button>MMX</button>
          </Link>
          <Link to="/10">
            <button>TG</button>
          </Link>
        </div>
      </div>
      <div className='n'>
        <h2>GBC</h2>
        <div className='botones-j'>
          <Link to="/11">
            <button>MGS</button> 
          </Link>
          <Link to="/12">
            <button>R</button>
          </Link>
          <Link to="/13">
            <button>HaPo</button>
          </Link>
        </div>
      </div>
      <div className='n'>
        <h2>GBA</h2>
        <div className='botones-j'>
          <Link to="/14">
            <button>G</button> 
          </Link>
          <Link to="/15">
            <button>MF</button>
          </Link>
          <Link to="/16">
            <button>MKSC</button>
          </Link>
          
        </div>
      </div>
      <Link to="/00">
        <button className='inicio'>Inicio</button>
      </Link>
    </div>
  );
};

export default Botones;