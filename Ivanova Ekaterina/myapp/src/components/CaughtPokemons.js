import React, {Component} from 'react';
import Pokemon from "./Pokemon";

export default class CaughtPokemons extends Component {
    constructor(props) {
        super(props);
        this.caught = [];
        this.state = {
            data: [],
            pages: 1,
            shown: [],
            caughtPokes: []
        };
    }

    componentDidMount() {
        let url = 'http://localhost:3002/caught/';
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                json = json.map(items => items.id);
                for (let i = 0; i < json.length; i++) {
                    let url2 = 'http://localhost:3002/pokemons/' + json[i];
                    fetch(url2)
                        .then((response2) => response2.json())
                        .then((json2) => {
                            let pokemon = <Pokemon key={json2.id} id={json2.id} name={json2.name}/>;
                            this.setState({
                                data: [...this.state.data, pokemon]
                            });
                        });
                }
            })
    }

    render() {
        return (
            <main>
                <div className={'page'}>{this.state.data}</div>
            </main>
        )
    };
}
