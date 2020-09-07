import React from  'react'

class MountApp extends React.Component{
    componentDidMount() {
        console.log("Mounted.")
    }
    // componentWillMount() {
    //     console.log("Will mounted")
    // }

    render(){
        console.log('Render lifecycle.')
        return(
            <h1>Hello</h1>
        );
    }
}
export default MountApp;