import {gql} from '@apollo/client';

export const getBooks = gql`
  {
    books {
      name
      id
    } 
  } 
`;
export const getAuthors = gql`
  {
    authors {
      name
      id
    }
  }
`;

export const addBook = gql`
  mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;