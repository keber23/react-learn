import React from "react";
import styles from "../Styles/MovieForm.module.css";
import { Movie } from "../../Types/movie";
import { genres } from "../../GenreSelect/Component/GenreSelect";

interface MovieFormProps {
  initialMovie?: Movie;
  onSubmit: (movie: Movie) => void;
}

const MovieForm = ({ initialMovie, onSubmit }: MovieFormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const movie: Movie = {
      title: formData.get("title") as string,
      posterPath: formData.get("movieUrl") as string,
      genres: Array.from(formData.getAll("genre") as Iterable<string>),
      releaseDate: formData.get("releaseDate") as string,
      voteAverage: parseFloat(formData.get("rating") as string),
      runtime: parseInt(formData.get("runtime") as string),
      overview: formData.get("overview") as string,
    };

    onSubmit(movie);
  };

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles["col-50"]}>
              <label htmlFor="title">TITLE</label>
              <input
                id="title"
                type="text"
                name="title"
                defaultValue={initialMovie?.title}
                placeholder="Movie title"
              />

              <label htmlFor="movieUrl">MOVIE URL</label>
              <input
                id="movieUrl"
                type="text"
                name="movieUrl"
                defaultValue={initialMovie?.posterPath}
                placeholder="https://"
              />

              <label htmlFor="genre">GENRE</label>
              <select
                multiple
                id="genre"
                name="genre"
                defaultValue={initialMovie?.genres?.map(function (x) {
                  return x.toLowerCase();
                })}
              >
                {genres
                  .filter((genre) => genre !== "ALL")
                  .map((genre) => (
                    <option key={genre} value={genre.toLowerCase()}>
                      {genre}
                    </option>
                  ))}
              </select>
            </div>

            <div className={styles["col-50"]}>
              <label htmlFor="releaseDate">RELEASE DATE</label>
              <input
                id="releaseDate"
                type="date"
                name="releaseDate"
                defaultValue={initialMovie?.releaseDate}
                placeholder="Select Date"
              />

              <label htmlFor="rating">RATING</label>
              <input
                id="rating"
                type="number"
                name="rating"
                defaultValue={initialMovie?.voteAverage?.toString()}
              />

              <label htmlFor="runtime">RUNTIME</label>
              <input
                id="runtime"
                type="number"
                name="runtime"
                defaultValue={initialMovie?.runtime?.toString()}
                placeholder="minutes"
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles["col-75"]}>
              <label htmlFor="overview">OVERVIEW</label>
              <textarea
                id="overview"
                name="overview"
                defaultValue={initialMovie?.overview}
                placeholder="Movie overview"
              ></textarea>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles["col-50"]}></div>
            <div className={styles["col-25"]}>
              <button type="reset" className={styles.btnReset}>
                RESET
              </button>
            </div>
            <div className={styles["col-25"]}>
              <button type="submit" className={styles.btnSubmit}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default MovieForm;
