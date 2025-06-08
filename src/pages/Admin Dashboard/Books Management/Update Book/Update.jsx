import { useState } from "react";
import {
  Navigate,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import { BookPlus, X } from "lucide-react";

const Update = () => {
  const { id } = useParams();
  const bookData = useLoaderData();
  const navigate = useNavigate();

  const {
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags = [],
    totalPages,
    yearOfPublishing,
  } = bookData;

  const [formData, setFormData] = useState({
    bookName,
    author,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  });

  const [tagInput, setTagInput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(tagInput.trim())) {
        setFormData((prev) => ({
          ...prev,
          tags: [...prev.tags, tagInput.trim()],
        }));
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Book Data:", formData);

    fetch(`http://localhost:5000/api/books/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Book updated successfully!");
          navigate("/admin/all-books");
        } else {
          alert("No changes made or book not found.");
        }
      })
      .catch((error) => {
        console.error("Error updating book:", error);
        alert("Failed to update book. Please try again.");
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">
            <BookPlus className="text-primary" />
            Update Book
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

            {/* Image */}
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
                <span className="label-text font-semibold">Rating</span>
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
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="text-red-500"
                    >
                      <X className="w-4 h-4" />
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
                Update Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
