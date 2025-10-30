import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BookPage } from "./pages/BookPage";
import { BookLibrary } from "./pages/BookLibrary";

export default function App() {
  const [books, setBooks] = useState([
    "sample-book-1.txt",
    "sample-book-2.txt",
  ]);
  const [bookName, setBookName] = useState("");

  const addData = () => {
    setBooks((prev) => [...prev, bookName]);
  };

  const handleNameChange = (event) => {
    setBookName(event.target.value);
  };

  return (
    <>
      <input type="text" value={bookName} onChange={handleNameChange} />
      <button onClick={addData}>Add</button>
      <Routes>
        {/* book list page */}
        <Route
          path="/"
          element={<BookLibrary books={books} setBooks={setBooks} />}
        />
        {/* individual book page */}
        <Route path="/:book" element={<BookPage books={books} />} />
      </Routes>
    </>
  );
}
