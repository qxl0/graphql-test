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
