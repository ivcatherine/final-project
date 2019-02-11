import React, { Component } from 'react';
import {FindImage} from "./Pokemon";

export default class ExactPokemon extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: 0,
            date: "",
            name: ""
        }
    }
    componentDidMount() {
        const handle  = this.props.match.params.id;
        this.setState({
            id: handle
        });
        let url = 'http://localhost:3002/pokemons/' + handle;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    name: json.name
                });

            })
            .catch(error => console.log(error));
        let url2 = 'http://localhost:3002/caught/' + handle;
        fetch(url2)
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    caught: json.caught,
                    date: json.date
                });

            })
    }
    render(){
        return(
            <div className={'singlePokemon'}>
                <FindImage id={this.state.id} name = {this.state.name}/>
                <h2>name: {this.state.name}</h2>
                <h2>id: {this.state.id}</h2>
                <h2>status: {this.state.caught ? 'Caught' : 'Uncaught'}</h2>
                <h3>{this.state.caught ? 'date:'+ this.state.date : ""}</h3>
            </div>


        )
    }

}