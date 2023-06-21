import React from "react";
import Book from "./Book";
import PropType from "prop-types"

class BookShelf extends React.Component {

  static propType = {
    title: PropType.string.isRequired,
    data: PropType.array.isRequired,
    updateBookShelf: PropType.func.isRequired,
    key: PropType.number,
  }

    render() {
      const {books, title, data, updateBookShelf} = this.props
        return (
            <div className="bookshelf">
              <h2 className="bookshelf-title">{title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {data.length !== 0 ? 
                  data.map(b=>(
                    <Book 
                      books= {books}
                      book = {b}
                      key={b.id}
                      updateBookShelf = {updateBookShelf} 
                    />
                    
                  ))
                  :<span>Empty!</span>
                }
                </ol>
              </div>
            </div>
        )
    }
}


export default BookShelf