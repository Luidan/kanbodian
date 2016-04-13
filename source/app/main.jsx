import React from 'react';
import ReactDom from 'react-dom';
import Card from './components/card';

let cardType = {
    id: 1,
    name: 'feature',
    backgroundColor: '#34a97b' 
};
let card = {
    id: 1,
    title: 'Test',
    description: 'Card description',
    cardType: cardType
};
ReactDom.render(<Card card={card} />, document.getElementById('root'));