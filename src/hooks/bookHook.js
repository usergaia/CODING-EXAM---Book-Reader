import { useState, useEffect } from "react";

// in-memory cache for comparing content
const cache = {};

export function useBook(textfile) {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      console.log("Textfile:", textfile, "useEffect triggered!");
      const result = await getBookContent(textfile);
      setContent(result);
    };
    fetchData();
  }, [textfile]);

  return content;
}

async function getBookContent(textfile) {
  // check cache first to skip redundant fetch
  if (cache[textfile]) {
    console.log("Skipped fetch for (cache):", textfile);
    return cache[textfile];
  }

  try {
    console.log("Fetching:", textfile);
    const response = await fetch(`/books/${textfile}`); // fetches book from `public/books` dir
    const data = await response.text();
    const res = data + " book end test";

    cache[textfile] = res; // store in cache
    return res;
  } catch (err) {
    console.error("ERROR:", err);
    return "Error fetching book content";
  }
}
