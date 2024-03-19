import React, { useState } from "react";
import { useQuery } from "react-query";

import {
  SearchForm,
  SortControl,
  GenreSelect,
  MovieTile,
  MovieDetails,
  Genre,
  Movie,
  SortOption,
} from "../../";

import { genres } from "../../GenreSelect/Component/GenreSelect";
import axios from "axios";
import styles from "../Styles/MovieListPage.module.css";

type ApiData = {
  totalAmount: number;
  data: Movie[];
  offset: number;
  limit: number;
};

const MovieListPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<Genre>(genres[0]);
  const [selectedSort, setSelectedSort] = useState<SortOption>("release_date");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const { isLoading, error, data } = useQuery({
    queryKey: ["movies", searchQuery, selectedGenre, selectedSort],
    queryFn: ({ signal }) => {
      let apiUrl = "http://localhost:4000/movies";

      apiUrl += `?sortBy=${selectedSort}&sortOrder=asc`;

      if (searchQuery) {
        apiUrl += `&searchBy=title&search=${searchQuery}`;
      }

      if (selectedGenre && selectedGenre !== "ALL") {
        apiUrl += `&filter=${selectedGenre}`;
      }

      return axios.get<ApiData>(apiUrl, { signal }).then((res) => {
        return res.data;
      });
    },
  });

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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{JSON.stringify(error)}</div>;

  return (
    <div className={styles.container}>
      {selectedMovie && (
        <div className={styles.movieDetailsContainer}>
          <button
            className={styles.closeButton}
            onClick={() => onMovieClick(null)}
          >
            Close
          </button>
          <MovieDetails movie={selectedMovie} />
        </div>
      )}
      {!selectedMovie && (
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
        {data?.data?.map((movie) => (
          <MovieTile
            key={movie.id}
            movie={movie}
            onClick={() => onMovieClick(movie)}
            onEdit={() => onMovieClick(movie)}
            onDelete={() => onMovieClick(movie)}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieListPage;
