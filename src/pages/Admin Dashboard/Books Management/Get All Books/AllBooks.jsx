import { useEffect, useState } from "react";
import StatusMessage from "../../../../Components/StatusComponent/StatusMessage";
import AllBooksCard from "./AllBooksCard";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/books");
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (!confirm) return;

    try {
      const res = await fetch(`http://localhost:5000/api/books/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setBooks(books.filter((book) => book._id !== id));
      } else {
        console.error("Failed to delete book");
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  if (loading) {
    return <StatusMessage type="loading" />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">All Books</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <AllBooksCard
            key={book._id}
            book={book}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
