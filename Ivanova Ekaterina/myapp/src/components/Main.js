import { Switch, Route } from 'react-router-dom'
import ListOfPokemons from "./ListOfPokemons";
import React,{Component} from "react";
import ExactPokemon from "./ExactPokemon";
import CaughtPokemons from "./CaughtPokemons";

class Main extends Component {
    render() {
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={ListOfPokemons}/>
                    <Route path='/pokemon/:id' component={ExactPokemon}/>
                    <Route path='/caught' component={CaughtPokemons}/>
                </Switch>
            </main>
        )
    }
}
export default Main;