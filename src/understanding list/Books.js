import React from 'react'
import Book from "./Book";

class Books extends React.Component{
    render() {
        return(
            <div>
                {this.props.books.map((book)=>{
                    return (
                        <Book deleteHandler={this.props.deleteHandler} book={book}/>
                    );
                })}
            </div>
        );
    }
}
export default Books;