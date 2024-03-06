import {
  Counter,
  GenreSelect,
  Genre,
  SearchForm,
  SortControl,
  MovieTile,
  MovieDetails,
  SortOption,
  Movie,
} from "./components";
import { useState } from "react";
import { genres } from "./components/GenreSelect/Component/GenreSelect";
import { displayValues } from "./components/SortControl/Component/SortControl";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre>(genres[0]);
  const [selectedSort, setSelectedSort] = useState<SortOption>(
    displayValues[0]
  );

  function onSearch(searchText: string) {
    console.log(searchText);
  }

  function onSelect(genre: Genre) {
    console.log(genre);
    setSelectedGenre(genre);
  }

  const handleSortChange = (newSort: SortOption) => {
    console.log("New sortOrder:", newSort);
    setSelectedSort(newSort);
  };

  const handleMovieClick = (movie: Movie) => {
    console.log("Clicked movie:", movie);
    // Perform any action when a movie is clicked, such as showing details
  };

  const handleEditMovie = (movie: Movie) => {
    console.log("Edit movie:", movie);
    // Perform edit operation on the movie
  };

  const handleDeleteMovie = (movie: Movie) => {
    console.log("Delete movie:", movie);
    // Perform delete operation on the movie
  };

  // Sample movie data
  const movie: Movie = {
    posterPath: "https://picsum.photos/id/1/200/200",
    title: "Example Movie",
    releaseDate: "2022-05-14",
    voteAverage: 8.5,
    runtime: 150,
    overview: "This is an example movie description.",
    genres: ["Action", "Adventure"],
  };

  return (
    <>
      <h1>Counters</h1>
      <Counter initialValue={0}></Counter>
      <h1>SearchForm</h1>
      <SearchForm initialSearchText="Search" onSearch={onSearch}></SearchForm>
      <h1>GenreSelect</h1>
      <GenreSelect
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={onSelect}
      ></GenreSelect>
      <h1>SortControl</h1>
      <SortControl
        displayValues={displayValues}
        initialSelection={selectedSort}
        onSelectionChange={handleSortChange}
      />
      <div className="movie-container">
        <MovieTile
          movie={movie}
          onClick={handleMovieClick}
          onEdit={handleEditMovie}
          onDelete={handleDeleteMovie}
        />
      </div>
      <div className="movie-details-container">
        <MovieDetails movie={movie} />
      </div>
    </>
  );
}

export default App;
