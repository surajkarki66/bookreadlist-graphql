import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from "../queries/queries";

const AddBook = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const { loading, data } = useQuery(getAuthorsQuery);
  const [addBook, bookMutationData] = useMutation(addBookMutation);
  const { error } = bookMutationData;

  const displayAuthors = () => {
    if (loading) {
      return <option disabled>Loading authors</option>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };
  if (error) {
    alert();
  }
  const submitForm = (e) => {
    e.preventDefault();
    addBook({
      variables: { name, genre, authorId },
      refetchQueries: [{ query: getBooksQuery }],
    });
    setName("");
    setGenre("");
    setAuthorId("");
  };

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Author:</label>
        <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
      <p style={{ textAlign: "center" }}>
        {bookMutationData.loading && "Loading..."}
      </p>
      <p style={{ textAlign: "center" }}>{error?.message}</p>
    </form>
  );
};
export default AddBook;
