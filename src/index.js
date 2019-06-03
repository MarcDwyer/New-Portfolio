import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from './components/home/home';
import Nav from './components/nav/nav';
import About from './components/about/about'
import Resume from './components/resume/resume'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <BrowserRouter>
    <div>
    <Nav />
    <Switch>
    <Route exact path="/resume" component={Resume} /> 
    <Route exact path="/about" component={About} /> 
    <Route path="/" component={Home} /> 
    </Switch>
    </div>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
