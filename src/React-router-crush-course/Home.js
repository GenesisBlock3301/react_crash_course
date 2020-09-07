import React from 'react'
import {Link} from "react-router-dom";

const Home =(props)=>{
    return(
        <div>
            <h1>I'm Home powered by {props.name}</h1>
            <Link to='post/1'>Post-1</Link>
            <Link to='post/2'>Post-2</Link>
            <Link to='post/3'>Post-3</Link>
        </div>
    )
};
export default Home;