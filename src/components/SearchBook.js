import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from '../utils/BooksAPI'
import Book from "./Book";

class SeacrhBook extends React.Component {
  state = {
    query: '',
    resultBooks: [],
  }

  updateQuery(event) {
    const serachQuery = event.target.value
    this.setState({
      query: serachQuery,
    })
    if (serachQuery) {
      BooksAPI.search(serachQuery)
        .then(data => {
          console.log("query result", data)
          this.setState({
            resultBooks: data,
          })
        })
    }
  }
  render() {
    const { query, resultBooks } = this.state
    const { updateBookShelf, books } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" value={query} onChange={(event) => (this.updateQuery(event))} placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {Array.isArray(resultBooks)?(
              resultBooks.map(book => (
                <Book key={book.id} book={book} updateBookShelf={updateBookShelf} books={books} />
              ))
            ):'No Result'
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SeacrhBook