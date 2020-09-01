import React from 'react'

function Greeting(props) {
    const isLogIn = props.isLogIn
}

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLogIn: false,                                                                                                   n
        }
    }
    handleLogOutClick = () =>{
        this.setState({isLogIn:false})
    }

    handleLogInClick=()=>{
        this.setState({isLogIn:true})
    }

    render(){
        const isLoggin = this.state.isLogIn;
        if(isLoggin){
            button = <LogoutButton onClick={this.handleLogOutClick}></LogoutButton>
        }
        else {
            button = <LoginButton onClick={this.handleLogInlick}></LoginButton>
        }
        return(
            <div>
                {button}
            </div>
        );
    }
}