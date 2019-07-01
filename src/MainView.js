import React from 'react'
import {Link} from 'react-router-dom'


class MainView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: this.props.shelf};
    
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(event,book) {
        this.setState({value: event.target.value});
        this.props.changeBookShelf(book,event.target.value);
      }
    render(){
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>Mastermind Book App</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.filter((book) => book.shelf === "currentlyReading").map( (book,index) => (
                        <li key={index}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={book.style}></div>
                                    <div className="book-shelf-changer">
                                      <select value = {this.state.value} onChange={(event) => this.handleChange(event,book)}>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading" default>Currently Reading</option>
                                        <option value="wantToRead" >Want to Read</option>
                                        <option value="read" >Read</option>
                                        <option value="none" >None</option>
                                      </select>
                                    </div>
                                </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.author}</div>
                        </div>
                    </li>
                    ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.filter((book) => book.shelf === "wantToRead").map((book,index) => (
                        <li key={index}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={book.style}></div>
                                    <div className="book-shelf-changer">
                                      <select value = {this.state.value} onChange={(event) => this.handleChange(event,book)}>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading" >Currently Reading</option>
                                        <option value="wantToRead" default >Want to Read</option>
                                        <option value="read" >Read</option>
                                        <option value="none" >None</option>
                                      </select>
                                    </div>
                                </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.author}</div>
                        </div>
                    </li>
                    ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.filter((book) => book.shelf === "read").map((book,index) => (
                       <li key={index}>
                       <div className="book">
                           <div className="book-top">
                               <div className="book-cover" style={book.style}></div>
                                   <div className="book-shelf-changer">
                                     <select value = {this.state.value} onChange={(event) => this.handleChange(event,book)}>
                                       <option value="move" disabled>Move to...</option>
                                       <option value="currentlyReading" >Currently Reading</option>
                                       <option value="wantToRead" >Want to Read</option>
                                       <option value="read" default>Read</option>
                                       <option value="none" >None</option>
                                     </select>
                                   </div>
                               </div>
                           <div className="book-title">{book.title}</div>
                           <div className="book-authors">{book.author}</div>
                       </div>
                   </li>
                    ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/addbook">
              <div className="open-search">
              <button >Add a book</button>
            </div>
            </Link>
          </div>
        )
    }
}

export default MainView