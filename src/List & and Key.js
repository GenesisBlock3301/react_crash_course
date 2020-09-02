import React from 'react'

function NumberItem(props) {
    return (<li>{props.value}</li>)
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItem = numbers.map((number)=> <NumberItem key={number.toString()} value={number}/>);
    return(
        <ul>
            {listItem}
        </ul>
    )
}
export default NumberList;