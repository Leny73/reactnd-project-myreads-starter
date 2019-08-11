import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route }from 'react-router-dom';
import MainView from './MainView'
import AddBook from './AddBook'


class BooksApp extends React.Component {
 
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    
    constructor(props){
      super(props)
      this.state = {
        books: [],
        value:''
      }
      this.changeBookShelf = this.changeBookShelf.bind(this)
      this.fetchData = this.fetchData.bind(this)
    }
  
  changeBookShelf = (book,shelf) =>{
  
    book.props.book.shelf = shelf;

    this.setState((prevState) => ({
      books: prevState.books.filter((b) => (b.id !== book.props.book.id)).concat(book.props.book)
    }));
    }
  
    fetchData =  async () => {
      await BooksAPI.getAll().then(books => {
        this.setState({
          books: books
        })
      })
    }
    syncData = (book, shelf) => {
      let testFlag = false;
      book.shelf = shelf;
      this.setState(prevState => {
        prevState.books.map(b => {
          if(b.id === book.id){
            b.shelf = book.shelf
            testFlag = true
          }
        });
        if(!testFlag){
          prevState.books.push(book)
        }
        
      }
      )
    }
  componentDidMount(){
   this.fetchData()
  }

  render() {
    return (
      <div className="app">
      <Route exact path='/' render={(props) => <MainView {...props} changeBookShelf={this.changeBookShelf} books={this.state.books}/>}/>
      <Route path='/search' render={(history) => (
        <AddBook
          {...history}
          changeBookShelf={this.changeBookShelf}
          onChange={this.syncData}
          books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
