import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'



class AddBook extends React.Component {
  
    constructor(props) {
        super(props);
        
        this.state = {
          value: '',
          books : [],
          bookValue:''
      };
      }
      
      componentDidMount(){
        console.log(this.props.books)
      }

    
      handleChange = async (event) => {
        this.setState({value: event.target.value});
        
        await BooksAPI.search(event.target.value).then(result => {
          if(result && result.error !== "empty query"){
            result.map(book => {
              book.shelf = 'none';
              this.props.books.map(propBook => {
                if(propBook.id === book.id){
                  book.shelf = propBook.shelf;
                }
              })
            });
            this.setState({
              books: result
            })
          }else {
            this.setState({
              books:[]
            })
          }
          
        });

      }
      handleBookChange = (event,book) => {
        this.setState({bookValue: event.target.value},
          this.props.onChange(book,event.target.value));
    }


      


    render(){
      return(
        <div className="search-books">
              <div className="search-books-bar">
                <Link to="/">
                <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" value={this.state.value} onChange={(event) => this.handleChange(event)}/>
  
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                {this.state.books && this.state.books.map((book,index) => {
                  if(book.imageLinks){
                    return(<li key={book.id}>
                      <div className="book">
                                  <div className="book-top">
                                      <div className="book-cover" style={{width:128,height:193,backgroundImage:'url('+(book.imageLinks.smallThumbnail || '')+')' }}></div>
                                          <div className="book-shelf-changer">
                                            <select value = {book.shelf} onChange={(event) => this.handleBookChange(event,book)}>
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
                              </li>)
                  }
                }
                )}
                </ol>
                  
              </div>
            </div>
      )
    }
  }

  AddBook.propTypes = {
    onChange:   PropTypes.func.isRequired,
    books:      PropTypes.array
  }

  export default AddBook