import React from "react";
import { graphql } from "@apollo/client/react/hoc";
import { getAuthors, getBooks, addBook } from './queries/query'
import {flowRight as compose} from 'lodash';

function AddBook(props) {
  const [state, setState] = React.useState({name: '', genre: '', authorId: ''});
  // define a local function
  let displayAuthors = () => {
    const { loading, error, authors } = props?.getAuthors;
    if (loading) return <option disabled>Loading authors...</option>;
    if (error) return <option disabled>Error loading authors</option>;
    return authors.map((author) => (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    ));
  };
  let submitForm = (e) => {
    e.preventDefault();
    props.addBook({
      variables: {
        name: state.name,
        genre: state.genre,
        authorId: state.authorId,
      },
      refetchQueries: [{ query: getBooks}],
    })};
  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label>Book name:</label>
        <input type="text" onChange={(e)=>setState({...state, name: e.target.value})}/>
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" onChange={(e)=> setState({...state, genre: e.target.value})} />
      </div>
      <div className="field">
        <label>Author:</label>
        <select onChange={(e)=>setState({...state, authorId: e.target.value})}>
          <option value="">Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default compose(
  graphql(getAuthors, { name: "getAuthors"}),
  graphql(addBook, { name: "addBook"})
)(AddBook);
