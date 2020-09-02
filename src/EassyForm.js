import React from 'react'

class EassyForm extends React.Component {
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
        alert(this.state.value);
        event.preventDefault();
    };

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Eassy:</label>
                    <textarea value={this.state.value} onChange={this.handleChange}/>///without handle change i cann't write anything
                    <input type="submit" value='Submit'/>
                </form>
            </div>
        );
    }
}
export default EassyForm;