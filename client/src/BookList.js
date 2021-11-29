import React from 'react'
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client'
import { graphql } from '@apollo/client/react/hoc'

const getBooks = gql`
  {
    books {
      name
      id
    } 
  } 
`;


function BookList(props) {
  const { books, loading} = props.data;
  console.log(loading)
  if (loading){
    return <div>Loading...</div>
  }
  return (
    <div>
      <ul id="book-list">
        {!books?null:books.map(book => (
          <li key={book.id}>
            {book.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default graphql(getBooks)(BookList);
