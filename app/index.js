import React from 'react';
import ReactDOM from 'react-dom';

const indexRender = (domElement) => {
    ReactDOM.render(<div>Test</div>, domElement);
};

global.indexRender = indexRender;
module.exports = indexRender;
