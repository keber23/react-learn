import {
  SortControl,
  GenreSelect,
  MovieTile,
  Loader,
  MoviesFound,
} from "../../../components";

import { genres } from "../../../components/GenreSelect/Component/GenreSelect";
import styles from "../Styles/MovieListPage.module.css";
import useMovieQuery from "../../../hooks/useMoviesQuery";
import { Genre, SortOption, Movie, SearchParams } from "../../../types";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";

export default function MovieListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = Object.fromEntries(searchParams.entries());

  let searchQuery = queryParams.query || "";
  let selectedGenre = queryParams.genre || genres[0];
  let selectedSort = queryParams.sortBy || "release_date";

  const navigate = useNavigate();

  const { isLoading, data } = useMovieQuery({
    searchQuery,
    selectedGenre,
    selectedSort,
  } as SearchParams);

  const handleSortChange = (newSort: SortOption) => {
    setSearchParams((searchParams) => {
      searchParams.set("sortBy", newSort);
      return searchParams;
    });
  };

  const handleGenreSelect = (genre: Genre) => {
    let selectedGenre = genre.toString().toLowerCase();

    if (selectedGenre === "all") {
      setSearchParams((searchParams) => {
        searchParams.delete("genre");
        return searchParams;
      });
    } else {
      setSearchParams((searchParams) => {
        searchParams.set("genre", selectedGenre);
        return searchParams;
      });
    }
  };

  function onMovieClick(movieId: number): void {
    navigate({ pathname: `/${movieId}`, search: searchParams.toString() });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function onMovieEdit(movieId: number): void {
    navigate({ pathname: `/${movieId}/edit`, search: searchParams.toString() });
  }

  const renderMovieTiles = (movies: Movie[] | undefined) => {
    return movies?.map((movie) => (
      <MovieTile
        key={movie.id}
        movie={movie}
        onClick={() => onMovieClick(movie.id!)}
        onEdit={() => onMovieEdit(movie.id!)}
        onDelete={() => {}}
      />
    ));
  };

  return (
    <div className={styles.container}>
      <Outlet />
      <div className={styles.movieGenreSortContainer}>
        <GenreSelect
          genres={genres}
          selectedGenre={selectedGenre as Genre}
          onSelect={handleGenreSelect}
        />
        <SortControl
          initialSelection={selectedSort as SortOption}
          onSelectionChange={handleSortChange}
        />
      </div>
      <MoviesFound count={data?.length} />
      <div className={styles.movieListContainer}>
        {isLoading ? <Loader /> : renderMovieTiles(data)}
      </div>
    </div>
  );
}
