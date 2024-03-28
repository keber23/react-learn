import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, MovieListPage } from "../pages";
import SearchFormWrapper from "../components/Wrappers/SearchFormWrapper";
import MovieDetailsWrapper from "../components/Wrappers/MovieDetailsWrapper"; //loader as movieLoader,

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieListPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SearchFormWrapper />,
      },
      {
        path: "/:movieId",
        element: <MovieDetailsWrapper />,
        //loader: movieLoader,
      },
    ],
  },
]);
