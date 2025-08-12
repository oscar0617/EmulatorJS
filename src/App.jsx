import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Game from './components/game.jsx'
import './App.css'

const App = () => {
  return (
    <div>
      <Game
        src="/final.html"
        title="Juego de NES"
        height="800px"
      />
      <footer>A Anthony lo toca el tio</footer>
    </div>
  );
};

export default App
