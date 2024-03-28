import React, { useEffect, useState } from "react";

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
import useMovieQuery from "../../../hooks/useMoviesQuery";
import { Genre, SortOption, Movie, SearchParams } from "../../../types";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";

export default function MovieListPage() {
  // const [searchQuery, setSearchQuery] = useState<string>("");
  // const [selectedGenre, setSelectedGenre] = useState<Genre>(genres[0]);
  // const [selectedSort, setSelectedSort] = useState<SortOption>("release_date");
  //const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = Object.fromEntries(searchParams.entries());

  let searchQuery = queryParams.query || "";
  let selectedGenre = queryParams.genre || genres[0];
  let selectedSort = queryParams.sortBy || "release_date";

  const navigate = useNavigate();

  // : queryParams.query || "",
  // selectedGenre: queryParams.genre || genres[0],
  // selectedSort: queryParams.sortBy || "release_date",

  // const initialSearchParams: SearchParams = {
  //   searchQuery: queryParams.query || "",
  //   selectedGenre: queryParams.genre || genres[0],
  //   selectedSort: queryParams.sortBy || "release_date",
  // };

  const { isLoading, data } = useMovieQuery({
    searchQuery,
    selectedGenre,
    selectedSort,
  } as SearchParams);

  // useEffect(() => {
  //   setSearchQuery(initialSearchParams.searchQuery);
  //   setSelectedGenre(initialSearchParams.selectedGenre as Genre);
  //   setSelectedSort(initialSearchParams.selectedSort as SortOption);
  // }, [initialSearchParams]);

  const onSearch = (searchText: string) => {
    //setSearchQuery(searchText);
    //setSearchParams({ ...searchParams, query: searchText });
    setSearchParams((searchParams) => {
      searchParams.set("query", searchText);
      return searchParams;
    });
  };

  const handleSortChange = (newSort: SortOption) => {
    //setSelectedSort(newSort);
    //setSearchParams({ ...searchParams, sortBy: newSort });

    setSearchParams((searchParams) => {
      searchParams.set("sortBy", newSort);
      return searchParams;
    });
  };

  const handleGenreSelect = (genre: Genre) => {
    //setSelectedGenre(genre);
    //setSearchParams({ ...searchParams, genre: genre });

    setSearchParams((searchParams) => {
      searchParams.set("genre", genre);
      return searchParams;
    });
  };

  function onMovieClick(movie: Movie | null): void {
    navigate(`/${movie?.id}`);
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

      {/* {selectedMovie ? (
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
      )} */}

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
