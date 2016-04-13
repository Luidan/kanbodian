import React, { Component } from 'react';
import marked from 'marked';

class Card extends Component {
    constructor () {
        super(...arguments);
        this.state = { showDetails: false };
    }
    
    toggleDetails() {
        this.setState({showDetails: !this.state.showDetails});
    }
    
    resolveCardDetails() {
        if (!this.state.showDetails) return undefined;
        
        let cardDetails = (
                <div className="card-details">
                    <span dangerouslySetInnerHTML={{__html:marked(this.props.card.description)}}/>
                </div>
            );
        return cardDetails;    
    }
    
    resolveSideColor() {
        let sideColor = {
            position: 'absolute',
            zIndex: -1,
            top: 0,
            bottom: 0,
            left: 0,
            width: 7,
            backgroundColor: this.props.card.cardType.backgroundColor
        };
        
        return sideColor;
    }
    
    render() {
        let cardDetails = this.resolveCardDetails();
        let sideColor = this.resolveSideColor();
        
        return (
            <div className="card">
                <div style={sideColor}/>
                <div className={ this.state.showDetails ? 'card-title card-title-is-open' : 'card-title' } onClick={this.toggleDetails.bind(this)}>{this.props.card.title}</div>
                {cardDetails}
            </div>
        );
    }
}

Card.propTypes = {
    card: React.PropTypes.object.isRequired
};

export default Card;