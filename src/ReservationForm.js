import React from 'react'

class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        // if(target.type == 'checkbox'){
        //     const value = target.checked
        // }
        // else {
        //     const value = target.value
        // }
        const name = target.name;
        this.setState({
            [name]: value
        })
    };


    render() {
        return (
            <div>
                <form>
                    <label>
                        Is Going:
                        <input name="isGoing" type='checkbox' checked={this.state.isGoing}
                               onChange={this.handleInputChange}/>
                    </label>
                    <br/>
                    <label>
                        Number of guest:
                        <input name='numberOfGuests' type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange}/>
                    </label>
                </form>
            </div>
        );
    }
}

export default ReservationForm;