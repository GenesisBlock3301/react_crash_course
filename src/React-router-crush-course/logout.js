import React from 'react'
import Auth from './Auth'
import {Redirect} from 'react-router-dom'

class Logout extends React.Component{

    state = {
        redirect:false
    };
    componentDidMount() {
        Auth.logout(()=>{
            this.setState({redirect:true})
        })
    }

    render() {
        if (this.state.redirect){
            return <Redirect to='/'/>
        }
        else{
            return <h1>Loging out.......</h1>
        }
    }
}
export default Logout;