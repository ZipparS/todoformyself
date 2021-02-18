import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import {ProgressBar} from "../../elements/progress";
import {SelectCategory, NewSubcategory, TasksPage, TaskItem, NewTask, NoMatch} from "../../pages";
import './main.css';

export class Main extends Component {
    render() {
        return (
            <main className="Todo-main">
                <div className="Todo-main__top">
                    <ProgressBar />
                </div>
                <div className="Todo-main__middle">
                    <Switch>
                        <Route exact path="/category/" component={SelectCategory}/>
                        <Route exact path="/category/:catId" component={TasksPage}/>
                        <Route exact path="/category/:catId/task/:taskId" component={TaskItem}/>
                        <Route exact path="/category/new/subcategory/:catId" component={NewSubcategory} />
                        <Route exact path="/category/new/task/" component={NewTask} />
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </main>
        );
    }
}