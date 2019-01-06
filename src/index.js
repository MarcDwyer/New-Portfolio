import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Intro from './components/intro/intro';
import Nav from './components/nav/nav';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
<Nav />
<Intro />
</div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
