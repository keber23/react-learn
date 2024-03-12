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
  Dialog,
  MovieForm,
} from "./components";
import { useState } from "react";
import { genres } from "./components/GenreSelect/Component/GenreSelect";
import styles from "./App.module.css";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre>(genres[0]);
  const [selectedSort, setSelectedSort] = useState<SortOption>();

  const [showAddMovie, setShowAddMovie] = useState(false);
  const [showEditMovie, setShowEditMovie] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const showDialogAddMovie = () => {
    setShowAddMovie(true);
  };

  const hideDialogAddMovie = () => {
    setShowAddMovie(false);
  };

  const showDialogEditMovie = () => {
    setShowEditMovie(true);
  };

  const hideDialogEditMovie = () => {
    setShowEditMovie(false);
  };

  const showDialogDeleteConfirmation = () => {
    setShowDeleteConfirmation(true);
  };

  const hideDialogDeleteConfirmation = () => {
    setShowDeleteConfirmation(false);
  };

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
  };

  const handleEditMovie = (movie: Movie) => {
    console.log("Edit movie:", movie);
  };

  const handleDeleteMovie = (movie: Movie) => {
    console.log("Delete movie:", movie);
  };

  // Sample movie data
  const movie: Movie = {
    posterPath: "https://picsum.photos/id/1/200/200",
    title: "Example Movie",
    releaseDate: "2022-05-14",
    voteAverage: 8.5,
    runtime: 150,
    overview: "This is an example movie description.",
    genres: ["Comedy", "Crime"],
  };

  function onSubmitMovie(movie: Movie): void {
    console.log("Submitted movie:", movie);
  }

  function handleDeleteMovieConfirmation(movie: Movie): void {
    console.log("Deleted movie:", movie);
  }

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

      <button onClick={showDialogAddMovie}>Add Movie</button>
      {showAddMovie && (
        <Dialog title="ADD MOVIE" onClose={hideDialogAddMovie}>
          <MovieForm onSubmit={onSubmitMovie} />
        </Dialog>
      )}

      <button onClick={showDialogEditMovie}>Edit Movie</button>
      {showEditMovie && (
        <Dialog title="EDIT MOVIE" onClose={hideDialogEditMovie}>
          <MovieForm initialMovie={movie} onSubmit={onSubmitMovie} />
        </Dialog>
      )}

      <button onClick={showDialogDeleteConfirmation}>Delete Movie</button>
      {showDeleteConfirmation && (
        <Dialog title="DELETE MOVIE" onClose={hideDialogDeleteConfirmation}>
          <p>Are you sure you want to delete "{movie.title}"?</p>
          <button
            className={styles.btnConfirm}
            onClick={() => handleDeleteMovieConfirmation(movie)}
          >
            Confirm
          </button>
        </Dialog>
      )}
    </>
  );
}

export default App;
