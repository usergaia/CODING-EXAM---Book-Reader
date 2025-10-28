import "../App.css";
import { PageBlock } from "../ui/PageBlock";
import { Link, useParams } from "react-router-dom";

export function BookPage({ books }) {
  const { book } = useParams(); // this gets the slug from the URL
  const exists = books.includes(book + ".txt"); // verifies book existence

  return (
    <>
      <div className="library">
        <Link to="/">
          <button> Back to Library</button>
        </Link>
        {exists ? (
          <div className="bookpage">
            <PageBlock textfile={book + ".txt"} />
          </div>
        ) : (
          <div className="bookpage">
            <h2>Book `{book}` not found</h2> {/* simple fallback */}
          </div>
        )}
      </div>
    </>
  );
}
