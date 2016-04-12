import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className = "card">
                <div className = "card-title">{this.props.title}</div>
                <div className = "card-details">{this.props.description}</div>
            </div>
        );
    }
}

Card.propTypes = {
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string
};

export default Card;