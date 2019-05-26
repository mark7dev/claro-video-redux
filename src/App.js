import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Item from './components/Item';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <>
            <Header/>
            <Switch>
              <Route exact path='/' component={ Content }/>
              <Route path='/:id' component={ Item }/>
            </Switch>
          </>
        </BrowserRouter>
      </Provider>
      
    );
  }
}

export default App;
