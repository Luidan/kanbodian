import React from 'react';
import ReactDom from 'react-dom';
//import Card from './components/card';
import KanbanBoard from './components/kanbanBoard';

let cardType = {
    id: 1,
    name: 'feature',
    backgroundColor: '#34a97b' 
};

let cardType2 = {
    id: 2,
    name: 'feature',
    backgroundColor: '#2E9AFE' 
};

let card1 = {
    id: 1,
    title: 'Test',
    description: 'Card description?',
    status: 'todo',
    cardType: cardType
};

let card2 = {
    id: 2,
    title: 'Crear esta aplicación',
    description: 'A la par que sobrevives a StockFinance',
    status: 'in-progress',
    cardType: cardType2
};

let cardsList = [card1, card2];

ReactDom.render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));