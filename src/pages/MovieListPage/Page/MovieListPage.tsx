import React, { useState } from "react";

import {
  SearchForm,
  SortControl,
  GenreSelect,
  MovieTile,
  MovieDetails,
  Loader,
} from "../../../components";

import { genres } from "../../../components/GenreSelect/Component/GenreSelect";
import styles from "../Styles/MovieListPage.module.css";
import useMovieQuery from "../../../hooks/useMovieQuery";
import { Genre, SortOption, Movie, SearchParams } from "../../../types";

const MovieListPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<Genre>(genres[0]);
  const [selectedSort, setSelectedSort] = useState<SortOption>("release_date");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const { isLoading, data } = useMovieQuery({
    searchQuery,
    selectedGenre,
    selectedSort,
  } as SearchParams);

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
        onEdit={() => {}}
        onDelete={() => {}}
      />
    ));
  };

  return (
    <div className={styles.container}>
      {selectedMovie ? (
        <section className={styles.movieDetailsContainer}>
          <button
            className={styles.closeButton}
            onClick={() => onMovieClick(null)}
          >
            Close
          </button>
          <MovieDetails movie={selectedMovie} />
        </section>
      ) : (
        <section className={styles.movieSearchContainer}>
          <h1>FIND YOUR MOVIE</h1>
          <SearchForm initialSearchText={searchQuery} onSearch={onSearch} />
        </section>
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
        {isLoading ? <Loader  /> : renderMovieTiles(data)}
      </div>
    </div>
  );
};

export default MovieListPage;
