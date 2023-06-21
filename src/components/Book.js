import React from "react"
import PropTypes from 'prop-types'
import ChangeShelf from "./ChangeShelf"

class Book extends React.Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        updateBookShelf: PropTypes.func
    }
    
    render() {
        const { book, updateBookShelf, books } = this.props
        const thumbnail = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : ''
        const title = book.title ? book.title : 'No title'
        const authors = book.authors ? book.authors : 'No authors'

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${thumbnail})`
                            }}>
                        </div>
                       <ChangeShelf book={book} books={books} updateBookShelf={updateBookShelf}  />
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors}</div>
                </div>
            </li>
        )
    }
}

export default Book