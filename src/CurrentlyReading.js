import React from 'react'


class CurrentlyReading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {books: this.props.books};


      }

      componentDidMount(){
          console.log(this.props);
      }

    render(){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.filter((book) => book.shelf === "currentlyReading").map( (book,index) => (
                            <li key={index}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks.smallThumbnail}}></div>
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
                                <div className="book-authors">{book.authors}</div>
                            </div>
                        </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default CurrentlyReading