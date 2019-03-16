import React from 'react';

export default class Character extends React.Component {

    render(){
      return(
      <div className="[ row character ]">
        <div className="[ col-xs-12 ]">
            <br/><br/><br/>
        </div>
        <div className="[ col-xs-6 ]">
          <img className="character__image" src={ this.props.image } alt={ this.props.name }/>
        </div>
        <div className="[ col-xs-6 ]">
            <h2>{ this.props.name }</h2>
            <p><b>Species: </b>{ this.props.species }</p>
            <p><b>Gender: </b>{ this.props.gender }</p>
        </div>
      </div>
    );
  }
}
