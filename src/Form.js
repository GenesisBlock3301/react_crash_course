import React from 'react'

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    };

    handleSubmit = (event) => {
        alert("A name was submitted " + this.state.value);
        event.preventDefault();
    };

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="" value={this.state.value} onChange={this.handleChange}/>
                    <input type="submit" value='Submit'/>
                </form>
            </div>
        );
    }
}
export default NameForm;