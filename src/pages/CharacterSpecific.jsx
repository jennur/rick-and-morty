import React from 'react';
import Character from '../components/Character/Character';

export default class CharacterSpecific extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rickMortyObj: [],
            characterId: this.props.match.params.id
        }
    }
    getData() {
        const app = this;
        fetch('https://rickandmortyapi.com/api/character/' + app.state.characterId)
        .then(response => { return response.json() })
        .then(data => { 
            app.setState({ 
                rickMortyObj: data
            });
        });
    };
    render() {
        const data = this.state.rickMortyObj;
        let specificCharacter = <Character image={ data.image }
                                           name={ data.name }
                                           gender={ data.gender }
                                           species={ data.species }
                                ></Character>
        return (
            <div className="[ row ]">
                <div className="[ col-sm-12 ]">
                    { specificCharacter }
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.getData();
    }
}