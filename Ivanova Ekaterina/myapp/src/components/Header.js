import {Component} from "react";
import React from "react";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return(
            <header>
                <div className={'menu'}>
                    <Link to='/'>Home</Link>
                    <Link to='/caught'>Caught</Link>
                </div>
                <h1>Catch the pokemon</h1>
            </header>
        )
    }

}
export default Header;