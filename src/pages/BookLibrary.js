import { Link } from "react-router-dom";
import "../App.css";
import { BookCard } from "../ui/BookCard";
import { fileToSlug } from "../util/slugConversion";

export function BookLibrary({ books }) {
  return (
    <div className="library">
      <h2>Book List</h2>
      <div className="booklist">
        {/* loops through books to display as button cards and routing*/}
        {books.map((book) => (
          <Link key={book} to={`/${fileToSlug(book)}`}>
            <BookCard textfile={book} />
          </Link>
        ))}
      </div>
    </div>
  );
}
