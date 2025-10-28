import "../App.css";

// reusable ui component for book card display
export function BookCard({ textfile }) {
  const title = textfile.replace(".txt", ""); // title cleanup for display
  return (
    <button className="bookcard">
      <h2>{title}</h2>
    </button>
  );
}
