import React, { Component } from 'react';
import {Link} from "react-router-dom";


export default class Pokemon extends Component {
    constructor(props){
        super();
        this.id = props.id;
        this.name = props.name;
        this.state = {
            date: "",
            caught: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        let url = 'http://localhost:3002/caught/' + this.id;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    caught: json.caught
                });

            })
            .catch();
    }

    handleClick() {
        let date = Pokemon.formatDate(new Date());
        fetch('http://localhost:3002/caught', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.id,
                caught: true,
                date: date
            })

        }).catch(error => console.log(error));
        this.setState(state => ({
            isToggleOn: !state.isToggleOn,
            caught: true,
            date: date
        }));
    }
    static formatDate(date) {
        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;
        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        return dd + '.' + mm + '.' + date.getFullYear();
    }

    render() {
            return(
                <div className={'pokemon card'} key={this.id}>
                    <FindImage id={this.id} name = {this.name}/>
                    <Link to={{pathname: `/pokemon/${this.id}`}}>{this.name}</Link>
                    <button className={'btn btn-dark'} onClick={this.handleClick} disabled={this.state.caught}>
                        {this.state.caught ? 'Caught' : 'Catch'}
                    </button>
                </div>
            )
    }
}

export function FindImage(props) {
    try {
        return <img src={require('../pokemons/' + props.id + '.png')} alt={props.name + ' picture'} />
    } catch (err) {
        return <div/>
    }
}



