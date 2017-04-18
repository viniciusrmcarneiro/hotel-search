import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'app/components/home';

const indexRender = (domElement) => {
    ReactDOM.render(<Home />, domElement);
};

global.indexRender = indexRender;
module.exports = indexRender;
