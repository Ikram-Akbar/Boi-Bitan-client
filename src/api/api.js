import axios from "axios";
const API_BASE_URL = "http://localhost:4800/api";

export const getAllBooks = () => {
  return axios.get(`${API_BASE_URL}/books`);
};
export const getBookById = (id) => {
  return axios.get(`${API_BASE_URL}/books/${id}`);
};
export const addBook = (book) => {
  return axios.post(`${API_BASE_URL}/books`, book);
};
const [formData, setFormData] = useState({
  bookName: "",
  author: "",
  category: "",
  image: "",
  publisher: "",
  rating: 0,
  review: "",
  tags: [],
  totalPages: 0,
  yearOfPublishing: new Date().getFullYear(),
});

export const deleteBook = (id) => {
  return axios.delete(`${API_BASE_URL}/books/${id}`);
};