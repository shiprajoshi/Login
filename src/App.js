import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import logo from './logo.svg';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Test from './components/Test';
import New from './components/New';
import LoginPage from './components/LoginPage';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <BrowserRouter history={history
        }>
        <Switch>
         
          <Route exact path ="/" history={history}><LoginPage /></Route>
           <Route exact path="/test"><Test/></Route>
          <Route exact path="/new"><New/></Route>

        </Switch>
        </BrowserRouter>
       
        {/* <PostForm/>
        <Posts name="app"/> */}
      {/* </div> */}
      </Provider>
    );
  }
}

export default App;

