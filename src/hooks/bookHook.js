import { useState, useEffect } from "react";

export function useBook(textfile) {
  const [content, setContent] = useState("");

  // fetch book content when textfile param changes, otherwise use the previously stored content. This avoids redundant fetches
  useEffect(() => {
    const fetchData = async () => {
      const result = await getBookContent(textfile);
      setContent(result);
    };
    fetchData();
  }, [textfile]);

  return content;
}

async function getBookContent(textfile) {
  try {
    const response = await fetch(`/books/${textfile}`); // fetches book from public/books dir
    const data = await response.text();
    return data + " book end test";
  } catch (err) {
    console.error("ERROR:", err);
    return "Error fetching book content";
  }
}
