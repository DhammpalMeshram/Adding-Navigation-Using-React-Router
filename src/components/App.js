import React, {Component, useState, } from "react";
import '../styles/App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from "./NavBar";

import Home from "./Home";
import About from "./About";
import LocationDisplay from "./LocationDisplay";
import NoMatch from "./NoMatch";

class App extends Component {

    constructor(){
        super();

    }

    render() {
        return(
            <BrowserRouter>
                <div id="main">
                    <NavBar/>

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path='/about' component={About}/>
                        <Route path="*" component={NoMatch}/>
                    </Switch>

                    <LocationDisplay/>
                </div>
             </BrowserRouter>

        )
    }
}


export default App;
