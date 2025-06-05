import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import StatusMessage from "../StatusComponent/StatusMessage";
import { addToStoredReadList, addToStoredWishList } from "../../Utility/loclStorage.js";

const BookById = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState(null);

  useEffect(() => {
    const id = parseInt(bookId);
    const found = data.find((d) => d.bookId === id);
    setBook(found);
    setLoading(false);
  }, [bookId, data]);

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };

  const handleAddToWishList = (id) => {
    addToStoredWishList(id);
  };

  if (loading) {
    return (
      <StatusMessage
        title="Loading..."
        message="Fetching book details, please wait."
      />
    );
  }

  if (!book) {
    return (
      <StatusMessage
        statusCode="404"
        title="Book Not Found"
        message="The book you're looking for doesn't exist or has been removed."
        showButton
        buttonText="Go Home"
        onButtonClick={() => (window.location.href = "/")}
      />
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 items-start">
      <div className="flex justify-center bg-slate-100 p-6 rounded-lg">
        <img
          src={book.image}
          alt={book.bookName}
          className="rounded-xl shadow-lg w-[250px] h-auto object-cover"
        />
      </div>

      <div className="border p-4 rounded-2xl border-dashed ">
        <h1 className="text-3xl font-bold mb-2">{book.bookName}</h1>
        <p className="text-lg text-gray-700 mb-1">
          <span className="font-semibold">By :</span> {book.author}
        </p>
        <div className="border-b-1"></div>
        <p className="text-md text-gray-600 mb-4">{book.category}</p>
        <div className="border-b-1"></div>

        <div className="mb-4">
          <h2 className="font-semibold">Review :</h2>
          <p className="text-gray-700 mt-1 text-justify">{book.review}</p>
        </div>

        <div className="mb-4">
          <h2 className="font-semibold mb-1">Tag</h2>
          <div className="flex gap-2 flex-wrap">
            {book.tags?.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-green-100 text-green-700 text-sm rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="border-b-1"></div>
        <div className="grid gap-3 mt-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Number of Pages:</span>
            <span className="font-semibold">{book.totalPages}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Publisher:</span>
            <span className="font-semibold">{book.publisher}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Year of Publishing:</span>
            <span className="font-semibold">{book.yearOfPublishing}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Rating:</span>
            <span className="font-semibold">{book.rating}</span>
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={() => handleMarkAsRead(bookId)}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Read
          </button>
          <button
            onClick={() => handleAddToWishList(bookId)}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookById;
