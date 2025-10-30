import { Link } from "react-router-dom";
import "../App.css";
import { BookCard } from "../ui/BookCard";

export function BookLibrary({ books, setBooks }) {
  const handleDelete = (book) => {
    const newBooks = books.filter((b) => b !== book);
    setBooks(newBooks);
  };

  return (
    <div className="library">
      <h2>Book List</h2>
      <div className="booklist">
        {/* loops through books to display as button cards and routing*/}
        {books.map((book) => (
          <>
            <Link key={book} to={`/${book.replace(".txt", "")}`}>
              <BookCard textfile={book} />
            </Link>
            <button onClick={() => handleDelete(book)}>Delete</button>
          </>
        ))}
      </div>
    </div>
  );
}
