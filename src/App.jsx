import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Index from "./views/Index";

import "./assets/scss/blk-design-system-react.scss";
import "./assets/css/nucleo-icons.css";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Index}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;