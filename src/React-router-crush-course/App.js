import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Nav from './Nav'
import Test from './Test'
import PrivateRoute from './PrivateRoute'
import Login from "./Login";
import Logout from "./logout"

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Nav/>
                    <h1>Hello</h1>
                    <Switch>
                        <Route path='/' exact render={()=>{
                            return <Home name="Nur Amin Sifat"/>;
                        }}/>
                        <Route path='/about' component={About}/>
                        <Route path='/contact' component={Contact}/>
                        <PrivateRoute path='/post/:postId' component={Test}/>
                        <Route path='/login' component={Login}/>
                        <Route path="/logout" component={Logout}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

//step-1 -> Browser router wrap out application
//step-2 -> create some Route
