import React from "react";
import BookShelf from './BookShelf'


class Home extends React.Component {
    shelfTypes = [
        { type: 'currentlyReading', title: 'Currently Reading' },
        { type: 'wantToRead', title: 'Want to Read' },
        { type: 'read', title: 'Read' }
    ]

    render() {
        const { books, updateBookShelf } = this.props
        return (
            this.shelfTypes.map((shelf, index) => {
                const shelfBooks = books.filter(b => (b.shelf === shelf.type))
                return (
                    <BookShelf
                        title={shelf.title}
                        data={shelfBooks}
                        updateBookShelf={updateBookShelf}
                        key={index}
                    />
                )
            }))
    }
}

export default Home