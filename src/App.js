import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Test from './components/Test';
import New from './components/New';
import LoginPage from './components/LoginPage';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path ="/" component={LoginPage} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/new" component={New} />
            
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

