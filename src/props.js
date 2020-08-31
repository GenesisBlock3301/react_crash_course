import React from 'react'

class PropsApp extends React.Component{
    render(){
        return(<div>
            <h3>My name is {this.props.name}</h3>
            <p>I'm from {this.props.address}</p>
        </div>)
    }
}

export default PropsApp;