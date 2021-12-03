import React from 'react'
import { graphql } from '@apollo/client/react/hoc'
import { getBook } from './queries/query';


function BookDetails(props) {

  let displayBookDetails = () => {
    const book = props.data.book;
    if (book){
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books" id="other-books">
            {book.author.books.map(item => {
              return <li style={{color: 'white', border: 'none' }} className="other-books-li" key={item.id}>{item.name}</li>
            })}
          </ul>

        </div>
      )
    } else {
      return <div>No book selected</div>
    }
  }
  return (
    <div id="book-details">
      {displayBookDetails()}
    </div>
  )
}

export default graphql(getBook, {
  options: (props) => {
    return {
      variables: {
        id: props.id
      }
    }
  }
})(BookDetails);
