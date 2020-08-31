import React from "react";
import {BrowserRouter as Router,Switch ,Route, Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";


class RouteApp extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0
            // title: 'Book one',
            // author: "Sifat Nas",
            // year: '2020'
        }
    }

    btnClick() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                             <li>
                                <Link to={'/about'}>About</Link>
                            </li>
                        </ul>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/about" component={About}/>
                        </Switch>

                    </div>
                </Router>
                <div>
                    <h1>Value is {this.state.count}</h1>
                    <button onClick={this.btnClick.bind(this)}>Click Me</button>
                </div>
            </div>
        )
    }
}

export default RouteApp;