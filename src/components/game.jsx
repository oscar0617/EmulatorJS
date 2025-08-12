import React from 'react';

const GameIframe = ({ src, title = "Game", width = "100%", height = "500px" }) => (
    <iframe
        src={src}
        title={title}
        width={width}
        height={height}
        style={{ border: 'none' }}
        allowFullScreen
    />
);

export default GameIframe;