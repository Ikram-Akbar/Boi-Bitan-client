import { Link } from "react-router-dom";

const AllBooksCard = ({ book, handleDelete }) => {
  return (
    <div>
      <div
        key={book._id}
        className="card bg-base-100 shadow-xl border border-gray-200"
      >
        <figure className="p-4">
          <img
            src={book.image}
            alt={book.bookName}
            className="rounded-xl h-60 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">{book.bookName}</h2>
          <p className="text-gray-600">By: {book.author}</p>
          <p className="text-sm text-gray-500">{book.category}</p>
          <p className="text-sm text-gray-500">Rating: {book.rating}</p>
          <p className="text-sm text-gray-500">Pages: {book.totalPages}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {book.tags?.map((tag, i) => (
              <span key={i} className="badge badge-outline badge-success">
                #{tag}
              </span>
            ))}
          </div>
          <div className="mt-4 flex justify-between">
            <Link
              to={`/admin/updatebook/${book._id}`}
              className="btn btn-sm btn-primary"
            >
              Edit{" "}
            </Link>

            <Link to={`/book/${book._id}`} className="btn btn-sm btn-secondary">
              View
            </Link>
            <button
              onClick={() => handleDelete(book._id)}
              className="btn btn-sm btn-error"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooksCard;
