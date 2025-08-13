// src/components/GameIframe.jsx
import React from 'react';
import './aa.css'; // Importa el CSS del componente

const aa = ({ src, title = "Game" }) => (
    <div className="iframe-container">
        <iframe
            src={src}
            title={title}
            style={{ border: 'none' }}
            allowFullScreen
            className="game-iframe"
        />
    </div>
);

export default aa;