import React from 'react'

class FlavourForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "coconut",
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    };

    handleSubmit = (event) => {
        alert("Your favorite flavor is: " + this.state.value);
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Pick your favorite flavor: </label>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapfruit">Grapfruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconout">Coconout</option>
                        <option value="mango">Mango</option>
                    </select>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default FlavourForm;