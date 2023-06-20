import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import SeacrhBook from './components/SearchBook'
import Home from './components/Home'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => this.setState({ books }))
  }

  updateBookShelf = (bookToBeUpdated, updatedShelf) => {
    BooksAPI.update(bookToBeUpdated, updatedShelf)
      .then((data) => {
        console.log("here's your updated data", data)

        bookToBeUpdated.shelf = updatedShelf

        this.setState(prevState => ({
          books: prevState.books
            .filter(book => book.id !== bookToBeUpdated.id)
            .concat(bookToBeUpdated)
        }))
      })
      .catch((err) => {
        console.log("Can't update!", err)
      })
  }

  render() {
    const { books } = this.state
    let showSearchPage = false

    return (
      <div className="app">
        {showSearchPage ? (
          <SeacrhBook />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Home books={books} updateBookShelf={this.updateBookShelf} />
            </div>
            <div className="open-search">
              <button onClick={() => { showSearchPage = true }} >Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
