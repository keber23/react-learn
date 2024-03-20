import React, { useState } from "react";

import {
  SearchForm,
  SortControl,
  GenreSelect,
  MovieTile,
  MovieDetails,
  Genre,
  Movie,
  SortOption,
} from "../../../components";

import { genres } from "../../../components/GenreSelect/Component/GenreSelect";
import styles from "../Styles/MovieListPage.module.css";
import useMovieQuery from "../../../hooks/useMovieQuery";

const MovieListPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<Genre>(genres[0]);
  const [selectedSort, setSelectedSort] = useState<SortOption>("release_date");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const { isLoading, data } = useMovieQuery(
    searchQuery,
    selectedGenre,
    selectedSort
  );

  const onSearch = (searchText: string) => {
    setSearchQuery(searchText);
  };

  const handleSortChange = (newSort: SortOption) => {
    setSelectedSort(newSort);
  };

  const handleGenreSelect = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  function onMovieClick(movie: Movie | null): void {
    setSelectedMovie(movie);
  }

  const renderMovieTiles = (movies: Movie[] | undefined) => {
    return movies?.map((movie) => (
      <MovieTile
        key={movie.id}
        movie={movie}
        onClick={() => onMovieClick(movie)}
        onEdit={() => onMovieClick(movie)}
        onDelete={() => onMovieClick(movie)}
      />
    ));
  };

  return (
    <div className={styles.container}>
      {selectedMovie ? (
        <div className={styles.movieDetailsContainer}>
          <button
            className={styles.closeButton}
            onClick={() => onMovieClick(null)}
          >
            Close
          </button>
          <MovieDetails movie={selectedMovie} />
        </div>
      ) : (
        <div className={styles.movieSearchContainer}>
          <h1>FIND YOUR MOVIE</h1>
          <SearchForm initialSearchText={searchQuery} onSearch={onSearch} />
        </div>
      )}

      <div className={styles.movieGenreSortContainer}>
        <GenreSelect
          genres={genres}
          selectedGenre={selectedGenre}
          onSelect={handleGenreSelect}
        />
        <SortControl
          initialSelection={selectedSort}
          onSelectionChange={handleSortChange}
        />
      </div>
      <div className={styles.movieListContainer}>
        {isLoading ? <div>Loading...</div> : renderMovieTiles(data)}
      </div>
    </div>
  );
};

export default MovieListPage;
