describe('INDEX RENDER', function(){
    const indexRender = require('../app/index.js');

    it('renders the APP COMPONENT into in a DOMElement', function(){
        indexRender(document.createElement("div"));
    });

});
