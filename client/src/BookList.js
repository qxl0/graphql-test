import React, { useState } from 'react'
import { graphql } from '@apollo/client/react/hoc'
import { getBooks } from './queries/query'
import BookDetails from './BookDetails';


function BookList(props) {
  const { books, loading} = props.data;
  const [ selectedBookId, setSelectedBookId ] = useState(null);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <ul id="book-list">
        {!books?null:books.map(book => (
          <li key={book.id} style={{cursor: 'pointer'}} onClick={(e)=>{ setSelectedBookId(book.id)}}>
            {book.name}
          </li>
        ))}
        <BookDetails id={selectedBookId} />
      </ul>
    </div>
  )
}

export default graphql(getBooks)(BookList);
