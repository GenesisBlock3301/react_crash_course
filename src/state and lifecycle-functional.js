import React from 'react';
import ReactDOM from 'react-dom';

function Tick() {
    const element = new Date().toLocaleDateString();
    return(
        <div>
            <h1>Hello world</h1>
            <h2>It is {element}.</h2>
            <p>----------------updated time---------------</p>
            <Clock date={new Date()}/>
        </div>
    );
}
// ReactDOM.render(element,document.getElementById('root'));

function Clock(props) {
    return(
        <div>
            <h1> Hello world two</h1>
            <h2>{props.date.toLocaleDateString()}</h2>
        </div>
    )
}
export default Tick;