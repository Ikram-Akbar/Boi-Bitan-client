import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import StatusMessage from "../StatusComponent/StatusMessage";
import { getAllBooks } from "../../api/api";

const FeaturedBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllBooks()
      .then((response) => response.data)
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch books:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <StatusMessage type="loading" />
      </div>
    );
  }

  return (
    <div className="p-6">
      <p className="text-2xl font-semibold mb-4 text-center">
        Available Books: {books?.length}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
