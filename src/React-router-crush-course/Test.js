import React from 'react'
import {Link} from "react-router-dom";

const Test=({match})=>{
    // console.log(props)
    return(
        <div>
            <h1>I'm Test {match.params.postId}</h1>
            <Link to='/'>Back to home</Link>
        </div>
    )
}
export default Test;