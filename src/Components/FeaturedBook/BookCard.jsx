import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <Link to={`/book/${book._id}`} className="max-w-sm rounded-2xl overflow-hidden shadow-md bg-base-100 hover:shadow-lg transition-shadow duration-300 p-6 ">
      <figure className="bg-gray-100 py-8 rounded-2xl">
        <img
          src={book.image}
          className="h-[166px] mx-auto"
          alt={book.bookName}
        />
      </figure>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{book.bookName}</h2>
        <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
        <div className="flex flex-wrap gap-2 text-xs text-white mb-3">
          {book.tags.map((tag, idx) => (
            <span key={idx} className="bg-indigo-400 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="text-sm text-gray-600">
          <p>
            <strong>Pages:</strong> {book.totalPages}
          </p>
          <p>
            <strong>Rating:</strong> ⭐ {book.rating}
          </p>
          <p>
            <strong>Published:</strong> {book.yearOfPublishing} by{" "}
            {book.publisher}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
