import React from 'react'

class WantToRead extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: this.props.shelf};

        this.handleChange = this.handleChange.bind(this)
      }

      handleChange(event,book) {
        this.setState({value: event.target.value});
        this.props.changeBookShelf(book,event.target.value);
      }

    render(){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.filter((book) => book.shelf === "wantToRead").map( (book,index) => (
                            <li key={index}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={book.style}></div>
                                        <div className="book-shelf-changer">
                                        <select value={this.state.value} onChange={(event) => this.handleChange(event,book)}>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
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
        )
    }
}

export default WantToRead;