import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage, LoginPage, CategoryPage, NoMatch } from '../../pages';
import { PrivateRoute } from '../../elements/private-router';
import './layout.css';

export class Layout extends Component {
    render() {
        return (
            <div className="Todo-content-layout">
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/login" component={LoginPage}/>
                    <PrivateRoute path="/category" component={CategoryPage} />
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        );
    }
}

