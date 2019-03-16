import React, { PropTypes }  from 'react';
import CharacterCard from '../components/CharacterCard/CharacterCard';
import Search from '../components/Search/Search';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rickMortyObj: [],
      rickMortyCards: []
    }
    this.handleSearchTerm = this.handleSearchTerm.bind(this);

  }
  static PropTypes = {
    className: PropTypes.String
  };

  getData() {
    const app = this;
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response => { return response.json();})
    .then(data => { 
        app.setState({ 
            rickMortyObj: data.results 
        });
    });
  };

  createCards() {
    const app = this;
    const rickMortyArray = app.state.rickMortyObj;
    app.state.rickMortyCards = [];
    rickMortyArray.forEach((value) => {
      app.state.rickMortyCards.push(
        <CharacterCard image={ value.image }
                       name={ value.name }
                       species={ value.species }
                       gender={ value.gender }
                       status={ value.status }
                       location={ value.location.name }
                       origin={ value.origin.name }
                       id={ value.id }
                       key={ value.id }
        >
        </CharacterCard>
      );
    });
  };

  handleSearchTerm(searchTerm) {
    const app = this;

    if(searchTerm !== ""){
      fetch('https://rickandmortyapi.com/api/character/')
      .then(response => { return response.json() })
      .then(data => {
            let characterObj = data.results;
            let characters = characterObj.filter((character) => {
            return (character.name.toLowerCase()).includes(searchTerm.toLowerCase()) ? character.name.indexOf(searchTerm) : false;
          });
          app.setState({
            rickMortyCards: [], 
            rickMortyObj: characters 
          }, app.createCards());
      });
    } else {
      app.getData();
    }
  }

  render() {
    const app = this;
    app.createCards();

    return(
        <div className="[ row ]">
          <div className="[ col-sm-12 ]">
            <h2>Rick and Morty characters</h2>
          </div>
          <div className="[ col-sm-12 ]">
            <Search onSearchTerm={ app.handleSearchTerm }></Search>
          </div>
          <div className="[ col-sm-12 ]">
            { (app.state.rickMortyCards === []) ? "No results" : app.state.rickMortyCards }
          </div>
        </div>
    );
  };

  componentDidMount() {
    this.getData();
  };
}