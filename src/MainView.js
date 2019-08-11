import React from 'react'
import {Link} from 'react-router-dom'
import Book from './Book';


class MainView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {books: props.books};

      }      
      
    render(){
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads: A Book Tracking App</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.filter((book) => book.shelf === "currentlyReading").map( (book,index) => (
                        <Book
                          key={book.id}
                          book={book}
                          onShelfChange={this.props.changeBookShelf}
                          />
                    ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.filter((book) => book.shelf === "wantToRead").map((book,index) => (
                        <Book
                        key={book.id}
                        book={book}
                        onShelfChange={this.props.changeBookShelf}
                        />
                    ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.filter((book) => book.shelf === "read").map((book,index) => (
                       <Book
                       key={book.id}
                       book={book}
                       onShelfChange={this.props.changeBookShelf}
                       />
                    ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/search">
              <div className="open-search">
              <button >Add a book</button>
            </div>
            </Link>
          </div>
        )
    }
}

export default MainView