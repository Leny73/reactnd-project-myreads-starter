import React from 'react';


class Book extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.book.shelf,
            title: this.props.book.title,
            author: this.props.book.authors,
            imageLinks: this.props.book.imageLinks
        };
    
        this.handleChange = this.handleChange.bind(this);
      }
    handleChange = (event) => {
        this.setState({value: event.target.value}
        , this.props.onShelfChange(this,event.target.value))
    }
    render(){
        return(
            <li >
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{width:128,height:193,backgroundImage:`url(${this.state.imageLinks.thumbnail})`}}></div>
                                    <div className="book-shelf-changer">
                                      <select value = {this.state.value} onChange={(event) => this.handleChange(event,this)}>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading" default>Currently Reading</option>
                                        <option value="wantToRead" >Want to Read</option>
                                        <option value="read" >Read</option>
                                        <option value="none" >None</option>
                                      </select>
                                    </div>
                                </div>
                            <div className="book-title">{this.state.title}</div>
                            <div className="book-authors">{this.state.author}</div>
                        </div>
                    </li>
        )
    }
}

export default Book