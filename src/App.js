import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BookPage } from "./pages/BookPage";
import { BookLibrary } from "./pages/BookLibrary";

export default function App() {
  const books = ["sample-book-1.txt", "sample-book-2.txt"];
  return (
    <Routes>
      {/* book list page */}
      <Route path="/" element={<BookLibrary books={books} />} />

      {/* individual book page */}
      <Route path="/:book" element={<BookPage books={books} />} />
    </Routes>
  );
}
