import React, {Component} from 'react';
import ColumnGroup from './column';

class KanbanBoard extends Component{
    render(){
        return (
            <div className="app">
                <ColumnGroup id='todo' title="To Do" cards={
                    this.props.cards.filter((card) => card.status === "todo")
                } />
                
                <ColumnGroup id='in-progress' title="In progress" cards={
                    this.props.cards.filter((card) => card.status === "in-progress")
                } />
                
                <ColumnGroup id='done' title="Done" cards={
                    this.props.cards.filter((card) => card.status === "done")
                } />
            </div>
        );
    }
}

export default KanbanBoard;