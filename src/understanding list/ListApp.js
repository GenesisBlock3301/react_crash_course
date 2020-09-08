import React from 'react'
import Books from './Books'

class ListApp extends React.Component{

    state = {
      books:[
          {
              name:"Javascript",
              price:20,
              id: 1
          },
          {
              name:"REDUX",
              price:30,
              id: 2
          },
          {
              name:"React Native",
              price:50,
              id: 3
          }
      ]
    };

    deleteHandler=(id)=>{
        let newBooks = this.state.books.filter((book)=>book.id!=id);
        this.setState({books:newBooks})
    };

    render(){
        return(
            <div className="">
                <Books deleteHandler={this.deleteHandler.bind(this)} books={this.state.books}/>
            </div>
        );
    }
}
export default ListApp;