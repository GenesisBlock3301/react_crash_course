import React from 'react'


// function ActionLink() {
//     function handleClick() {
//
//     }{
//         // e.preventDefault()
//         console.log("This link was link.")
//     }
//
//     return(
//       <div>
//           <a href="#" onClick={handleClick}>Click me</a>
//       </div>
//     );
// }
// export default ActionLink;

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: true
        }
    }
    handleclick = ()=>{
        this.setState({
            isToggleOn: !this.state.isToggleOn
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.handleclick}>{this.state.isToggleOn ? 'ON': 'OFF'}</button>
            </div>
        );
    }
}
export default Toggle;