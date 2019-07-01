import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import ReactDOM from 'react'



class AddBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
        books:[]};
        
    
        this.handleChange = this.handleChange.bind(this);
      }
      
      handleChange(event) {
        this.setState({value: event.target.value});
        BooksAPI.search(event.target.value).then(book =>{
            this.setState({
                books:book
            }, this.renderBooks())
        })
      }

      renderBooks(){
            this.state.books.map((book,index) =>
                <Book
                key={index}
                title={this.state.title}
                // style={this.state.imageLinks.thumbnail}
                author={this.state.authors}
                />
            )
      }

    render(){
      return(
        <div className="search-books">
              <div className="search-books-bar">
                <Link to="/">
                <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" value={this.state.value} onChange={this.handleChange}/>
  
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid"></ol>
              </div>
            </div>
      )
    }
  }

  export default AddBook