import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Index from "./views/Index";

import "./assets/scss/blk-design-system-react.scss";
import "./assets/css/nucleo-icons.css";
import "./assets/scss/snow.scss";
import Snow from "./components/common/Snow";

class App extends Component {
    render() {
        return (
            <>
                <Snow number={70}/>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' component={Index}/>
                    </Switch>
                </BrowserRouter>
            </>
        );
    }
}

export default App;