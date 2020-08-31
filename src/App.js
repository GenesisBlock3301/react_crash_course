import React from 'react';
import Home from './Home'
import About from './About'
import './App.css';
import { BrowserRouter,Router ,Route, Link } from "react-router-dom";

function App() {
    return (
        <div>
            <Header/>
            <Footer/>
        </div>
    );
}

function Header() {

    return (
        <Router>
            <div>
                <ul></ul>
            </div>
        </Router>

    );
}

function Footer() {
    return (
        <h1>Welcome to footer</h1>
    );
}


export default App;
