import React from "react";
import { gql } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";

const getAuthors = gql`
  {
    authors {
      name
      id
    }
  }
`;

function AddBook(props) {
  let displayAuthors = () => {
    console.log("props.data", props.data);
    const { loading, error, data } = props?.data;
    if (loading) return <option disabled>Loading authors...</option>;
    if (error) return <option disabled>Error loading authors</option>;
    return props.data.authors.map((author) => (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    ));
  };
  return (
    <form id="add-book">
      <div className="field">
        <label>Book name:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Author:</label>
        <select>
          <option value="">Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default graphql(getAuthors)(AddBook);
