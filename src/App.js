import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import SeacrhBook from './components/SearchBook'
import Home from './components/Home'
import { Route, Routes, Link } from 'react-router-dom'

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
        bookToBeUpdated.shelf = updatedShelf

        this.setState(prevState => ({
          books: prevState.books
            .filter(book => book.id !== bookToBeUpdated.id)
            .concat(bookToBeUpdated),
        }))
      })
      .catch((err) => {
        console.log("Can't update!", err)
      })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Routes>
          <Route exact path='/'
            element={<div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <Home books={books} updateBookShelf={this.updateBookShelf} />
              </div>
              <div className="open-search">
                  <Link to='/search'><button>Add a book</button></Link>
              </div>
            </div>}
          />
          <Route
            path='/search'
            element={<SeacrhBook updateBookShelf={this.updateBookShelf} books={books}/>}
          />
        </Routes>
      </div>
    )
  }
}

export default BooksApp
