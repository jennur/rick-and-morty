import React from 'react';

class CharacterCard extends React.Component {

    render(){
      return(
      <div className="[ col-sm-4 ]">
        <a className="[ card ]" href={"#/character/" + this.props.id }>
        <div className="[ card__image ]">
          <img src={ this.props.image } alt="Card"/>
        </div>
          <div className="[ card__info ]">
            <h3>Name: { this.props.name }</h3>
            <p><b>Species: </b> { this.props.species }</p>
            <p><b>Status: </b> { this.props.status }</p>
            <p><b>Gender: </b> { this.props.gender }</p>
            <p><b>Location: </b> { this.props.location }</p>
            <p><b>Place of origin: </b> { this.props.origin }</p>
          </div>
          </a>
        </div>
    );
  }
}

export default CharacterCard;