import React from 'react'

function NumberList(props) {
    const number = props.numbers;
    const listItems = number.map((number)=><li key={number.toString()}>{number}</li>);
    return(
        <ul>
            {listItems}
        </ul>
    )
}
export default NumberList;