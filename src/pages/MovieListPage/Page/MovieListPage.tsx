import {
  SortControl,
  GenreSelect,
  MovieTile,
  Loader,
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

  function onMovieClick(movie: Movie | null): void {
    navigate({ pathname: `/${movie?.id}`, search: searchParams.toString() });
  }

  const renderMovieTiles = (movies: Movie[] | undefined) => {
    return movies?.map((movie) => (
      <MovieTile
        key={movie.id}
        movie={movie}
        onClick={() => onMovieClick(movie)}
        onEdit={() => {}}
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
      <div className={styles.movieListContainer}>
        {isLoading ? <Loader /> : renderMovieTiles(data)}
      </div>
    </div>
  );
}
