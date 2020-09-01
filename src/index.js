import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ClassApp from './class components'
import PropsApp from "./props";
import StateApp from "./States";
import Home from './Home'
import RouteApp from "./React-router-dom";
import Tick from './state and lifecycle-functional'
import Clock from  './state and lifecycle-class'
import ActionLink from "./handling event";
import Toggle from './handling event'
import NumberList from "./List & and Key";

const numbers = [1,2,4,5,6];
ReactDOM.render(<NumberList numbers={numbers}/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
