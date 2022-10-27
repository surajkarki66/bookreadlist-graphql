import { useQuery } from "@apollo/client";

import { getBookQuery } from "../queries/queries";

const BookDetails = ({ bookId }) => {
  const { loading, data } = useQuery(getBookQuery, {
    variables: { id: bookId },
  });
  const displayBookDetails = () => {
    if (data?.book) {
      return (
        <div>
          <h2>{data?.book.name}</h2>
          <p>{data?.book.genre}</p>
          <p>{data?.book.author.name}</p>
          <p>All the books by this author:</p>
          <ul className="other-books">
            {data?.book.author.books.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else if (loading) {
      return <div>Loading</div>;
    } else {
      return <div>No book selected</div>;
    }
  };
  return <div id="book-details">{displayBookDetails()}</div>;
};
export default BookDetails;
