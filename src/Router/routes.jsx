import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home Page/Home";
import Error from "../pages/Not Found/Error";
import BookById from "../Components/BookById/BookById";
import ArchivedBookList from "../pages/ArchivedBooks/ArchivedBookList";

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
        path: "book/:bookId",
        element: <BookById />,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "archived-books",
        element:<ArchivedBookList />,
      },
    ],
  },
]);
