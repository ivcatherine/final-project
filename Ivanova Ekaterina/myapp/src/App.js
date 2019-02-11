import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Main/>
                <footer className={'card-header'}>2019 Ivanova Ekaterina</footer>
            </div>
        );
    }
}

export default App;
