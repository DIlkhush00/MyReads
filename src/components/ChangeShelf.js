import React from "react";


class ChangeShelf extends React.Component {



    render() {
        const {book, books, updateBookShelf} = this.props
        let currentShelf = 'none'
        for (let b of books) {
            if (b.id === book.id) {
                currentShelf = b.shelf
                break
            }

        }
        return (

            <div className="book-shelf-changer">
                <select defaultValue={currentShelf} onChange={event => updateBookShelf(book, event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading" >Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read" >Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default ChangeShelf;