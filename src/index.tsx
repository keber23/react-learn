import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieListPage } from "./pages";
import SearchFormWrapper from "./components/Wrappers/SearchFormWrapper";
import MovieDetailsWrapper from "./components/Wrappers/MovieDetailsWrapper";
import { AddMovieForm, EditMovieForm } from "./components";

export const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MovieListPage />}>
            <Route path="/" element={<SearchFormWrapper />}>
              <Route path="new" element={<AddMovieForm />} />
            </Route>
            <Route path="/:movieId" element={<MovieDetailsWrapper />}>
              <Route path="edit" element={<EditMovieForm />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
