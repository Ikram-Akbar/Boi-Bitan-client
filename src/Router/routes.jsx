import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home Page/Home";
import Error from "../pages/Not Found/Error";
import BookById from "../Components/BookById/BookById";
import ArchivedBookList from "../pages/ArchivedBooks/ArchivedBookList";
import Dashboard from "../Layout/Admin Dashboard/Dashboard";
import AllBooks from "../pages/Admin Dashboard/Books Management/Get All Books/AllBooks";
import AddBook from "../pages/Admin Dashboard/Books Management/Add Book/AddBook";
import Update from "../pages/Admin Dashboard/Books Management/Update Book/Update";
import DeleteBook from "../pages/Admin Dashboard/Books Management/Delete Book/DeleteBook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />, 
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "book/:id",
        element: <BookById />,
        
      },
      {
        path: "archived-books",
        element: <ArchivedBookList />,
      },
    ],
  },
  // Admin dashboard routing
  {
    path: "/admin",
    element: <Dashboard />,
    errorElement: <Error />,
    children: [
     
      {
        path: "all-books",
        element: <AllBooks />
      },
      {
        path: "add-book",
        element: <AddBook />
      },
      {
        path: "updatebook/:id",
        element: <Update />
      },
      {
        path: "delete-book",
        element: <DeleteBook />
      },
    ]
  }
]);