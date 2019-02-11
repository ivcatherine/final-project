import React, { Component } from 'react';
import '../App.css';
import Pokemon from './Pokemon.js';

export default class ListOfPokemons extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            pages: 1,
            shown:[]
        };
        this.handleClick2 = this.handleClick2.bind(this);
    }
    componentDidMount() {
        let url = 'http://localhost:3002/pokemons';
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                let pokes = json.map(items =>
                            <Pokemon key={items.id} id={items.id} name={items.name}/>
                        );
                this.setState({
                    data: pokes,
                    shown: pokes.slice(0,18)
                });

            })
            .catch(error => console.log(error));
    }

    handleClick2() {
        let newPage = [];
        let itemsPerPage = 18;
        for (let i = (this.state.pages * itemsPerPage); i < (this.state.pages * itemsPerPage + itemsPerPage); i++) {
            newPage.push(this.state.data[i]);
        }
        this.setState({
            shown: [...this.state.shown, newPage],
            pages: this.state.pages + 1
        });
    }

    render() {
            return (
                <div>
                    <div className={'page'}>{this.state.shown}</div>
                    <button className={'btn btn-outline-dark'} onClick={this.handleClick2}>More</button>
                </div>
            )
    };
}
