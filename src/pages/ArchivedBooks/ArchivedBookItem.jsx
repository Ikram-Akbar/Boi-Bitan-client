import React from 'react';

const ArchivedBookItem = ({ book }) => {
  const handleRestore = () => {
    // Restore logic here
    console.log(`Restoring book: ${book.title}`);
    
  };

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold">{book.title}</h3>
      <p className="text-sm text-gray-600">By {book.author}</p>
      <p className="text-xs text-gray-400">Archived: {book.archivedDate}</p>
      <button
        onClick={handleRestore}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
      >
        Restore
      </button>
    </div>
  );
};

export default ArchivedBookItem;
