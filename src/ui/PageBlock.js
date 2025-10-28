import "../App.css";
import { useBook } from "../hooks/bookHook";

// reusable ui component for book page display
export function PageBlock({ textfile }) {
  const content = useBook(textfile); // custom hook to fetch book content from textfile
  const title = textfile.replace(".txt", ""); // title cleanup for display
  return (
    <div className="pageblock">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
