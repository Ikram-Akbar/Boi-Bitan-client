import { useState } from "react";
import { BookPlus, X } from "lucide-react";
import { addBook } from "../../../../api/api";

const AddBook = () => {

  //todo : Make a custom hook for form handling
  const [formData, setFormData] = useState({
    bookName: "",
    author: "",
    image: "",
    review: "",
    totalPages: "",
    rating: "",
    category: "",
    tags: [],
    publisher: "",
    yearOfPublishing: "",
  });

  const [tagInput, setTagInput] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTagKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === ",") && tagInput.trim()) {
      e.preventDefault();
      const tag = tagInput.trim();
      if (!formData.tags.includes(tag)) {
        setFormData({ ...formData, tags: [...formData.tags, tag] });
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    addBook(formData)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Book added successfully!");
        }
      })
      .catch((error) => {
        console.error("Error adding book:", error);
        alert("Failed to add book. Please try again.");
      });

    // Reset form
    setFormData({
      bookName: "",
      author: "",
      image: "",
      review: "",
      totalPages: "",
      rating: "",
      category: "",
      tags: [],
      publisher: "",
      yearOfPublishing: "",
    });
    setTagInput("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">
            <BookPlus className="text-primary" />
            Add a New Book
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* Book Name */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Book Name</span>
              </label>
              <input
                type="text"
                name="bookName"
                value={formData.bookName}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Author */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Author</span>
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Image URL */}
            <div className="md:col-span-2">
              <label className="label">
                <span className="label-text font-semibold">Image URL</span>
              </label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Review */}
            <div className="md:col-span-2">
              <label className="label">
                <span className="label-text font-semibold">Review</span>
              </label>
              <textarea
                name="review"
                value={formData.review}
                onChange={handleChange}
                rows={4}
                className="textarea textarea-bordered w-full"
                placeholder="Short summary or review"
              />
            </div>

            {/* Total Pages */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Total Pages</span>
              </label>
              <input
                type="number"
                name="totalPages"
                value={formData.totalPages}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Rating (out of 5)
                </span>
              </label>
              <input
                type="number"
                name="rating"
                step="0.1"
                max="5"
                min="0"
                value={formData.rating}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>

            {/* Category */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Category</span>
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>

            {/* Publisher */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Publisher</span>
              </label>
              <input
                type="text"
                name="publisher"
                value={formData.publisher}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>

            {/* Year of Publishing */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Year of Publishing
                </span>
              </label>
              <input
                type="number"
                name="yearOfPublishing"
                value={formData.yearOfPublishing}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>

            {/* Tags */}
            <div className="md:col-span-2">
              <label className="label">
                <span className="label-text font-semibold">Tags</span>
              </label>
              <div className="input input-bordered w-full flex flex-wrap items-center gap-2 py-2 px-3">
                {formData.tags.map((tag, i) => (
                  <div
                    key={i}
                    className="badge badge-outline flex items-center gap-1"
                  >
                    {tag}
                    <button type="button" onClick={() => removeTag(tag)}>
                      <X className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                ))}
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleTagKeyDown}
                  placeholder="Press Enter to add tag"
                  className="grow bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-end mt-4">
              <button type="submit" className="btn btn-primary">
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
