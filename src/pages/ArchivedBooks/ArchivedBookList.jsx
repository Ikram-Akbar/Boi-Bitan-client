import { useEffect, useState } from 'react';
import ArchivedBookItem from './ArchivedBookItem';

const ArchivedBookList = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch('/archiveBooks.json')
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setFilteredBooks(data); // Initial full list
      });
  }, []);

  // Re-filter when selection changes
  useEffect(() => {
    let result = [...books];
    if (selectedAuthor !== 'All') {
      result = result.filter(book => book.author === selectedAuthor);
    }
    if (selectedCategory !== 'All') {
      result = result.filter(book => book.category === selectedCategory);
    }
    setFilteredBooks(result);
  }, [selectedAuthor, selectedCategory, books]);

  // Get unique authors and categories for dropdowns
  const uniqueAuthors = ['All', ...new Set(books.map(book => book.author))];
  const uniqueCategories = ['All', ...new Set(books.map(book => book.category))];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Archived Books ({filteredBooks.length})</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          className="border rounded px-3 py-2"
          value={selectedAuthor}
          onChange={(e) => setSelectedAuthor(e.target.value)}
        >
          {uniqueAuthors.map((author, index) => (
            <option key={index} value={author}>
              {author}
            </option>
          ))}
        </select>

        <select
          className="border rounded px-3 py-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {uniqueCategories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Book List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBooks.map(book => (
          <ArchivedBookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ArchivedBookList;
