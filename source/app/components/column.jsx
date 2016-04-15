import React, {Component} from 'react'
import Card from './card';

class Column extends Component{
    render(){
        var cards = this.props.cards.map((card) => {
            return <Card id ={card.id}
                        title = {card.title}
                        description = {card.description}
                        status = {card.status}
                        cardType = {card.cardType} />
        });
        
        return (
            <div className="column">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        );
    }
}

export default Column;
