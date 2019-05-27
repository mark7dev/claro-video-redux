import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Content from '../components/Content';
import Item from '../components/Item';

class AppRouter extends Component {
    render() {
        return (
            <>
                <Header/>
                <Switch>
                <Route exact path='/' component={ Content }/>
                <Route path='/:id' component={ Item }/>
                </Switch>
            </>
        );
    }
}

export default AppRouter;