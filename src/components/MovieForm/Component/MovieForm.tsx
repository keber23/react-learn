import styles from "../Styles/MovieForm.module.css";
import { Movie } from "../../../types/movie";
import { genres } from "../../GenreSelect/Component/GenreSelect";
import { useForm } from "react-hook-form";

interface MovieFormProps {
  initialMovie?: Movie;
  onSubmit: (movie: Movie) => void;
}

const MovieForm = ({ initialMovie, onSubmit }: MovieFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Movie>();

  const submitMovieForm = async (movie: Movie) => {
    await onSubmit(movie);
  };

  const urlRegex =
    /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)/;
  const requiedMessage = "This field is required";
  const emptyString = "";
  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(submitMovieForm)}>
          <div className={styles.row}>
            <div className={styles["col-50"]}>
              <label htmlFor="title">TITLE</label>
              <input
                id="title"
                type="text"
                defaultValue={initialMovie?.title}
                placeholder="Movie title"
                {...register("title", { required: requiedMessage })}
                className={errors.title ? styles.errorInput : emptyString}
              />
              {errors.title && (
                <p className={styles.error} role="alert">
                  {errors.title.message}
                </p>
              )}
              <label htmlFor="movieUrl">MOVIE URL</label>
              <input
                id="movieUrl"
                type="text"
                defaultValue={initialMovie?.poster_path}
                placeholder="https://"
                {...register("poster_path", {
                  required: requiedMessage,
                  pattern: {
                    value: urlRegex,
                    message: "Invalid URL",
                  },
                })}
                className={errors.poster_path ? styles.errorInput : emptyString}
              />
              {errors.poster_path && (
                <p className={styles.error} role="alert">
                  {errors.poster_path.message}
                </p>
              )}
              <label htmlFor="genre">GENRE</label>
              <select
                multiple
                id="genre"
                defaultValue={initialMovie?.genres?.map(function (x) {
                  return x.toLowerCase();
                })}
                {...register("genres", {
                  required: requiedMessage,
                })}
                className={errors.genres ? styles.errorInput : emptyString}
              >
                {genres
                  .filter((genre) => genre !== "ALL")
                  .map((genre) => (
                    <option key={genre} value={genre.toLowerCase()}>
                      {genre}
                    </option>
                  ))}
              </select>
              {errors.genres && (
                <p className={styles.error} role="alert">
                  {errors.genres.message}
                </p>
              )}
            </div>

            <div className={styles["col-50"]}>
              <label htmlFor="releaseDate">RELEASE DATE</label>
              <input
                id="releaseDate"
                type="date"
                defaultValue={initialMovie?.release_date}
                placeholder="Select Date"
                {...register("release_date", {
                  required: requiedMessage,
                })}
                className={
                  errors.release_date ? styles.errorInput : emptyString
                }
              />
              {errors.release_date && (
                <p className={styles.error} role="alert">
                  {errors.release_date.message}
                </p>
              )}
              <label htmlFor="rating">RATING</label>
              <input
                id="rating"
                type="number"
                defaultValue={initialMovie?.vote_average?.toString()}
                {...register("vote_average", {
                  required: requiedMessage,
                  valueAsNumber: true,
                })}
                className={
                  errors.vote_average ? styles.errorInput : emptyString
                }
              />
              {errors.vote_average && (
                <p className={styles.error} role="alert">
                  {errors.vote_average.message}
                </p>
              )}
              <label htmlFor="runtime">RUNTIME</label>
              <input
                id="runtime"
                type="number"
                defaultValue={initialMovie?.runtime?.toString()}
                placeholder="minutes"
                {...register("runtime", {
                  required: requiedMessage,
                  valueAsNumber: true,
                })}
                className={errors.runtime ? styles.errorInput : emptyString}
              />
              {errors.runtime && (
                <p className={styles.error} role="alert">
                  {errors.runtime.message}
                </p>
              )}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles["col-75"]}>
              <label htmlFor="overview">OVERVIEW</label>
              <textarea
                id="overview"
                defaultValue={initialMovie?.overview}
                placeholder="Movie overview"
                {...register("overview", {
                  required: requiedMessage,
                })}
                className={errors.overview ? styles.errorInput : emptyString}
              ></textarea>
              {errors.overview && (
                <p className={styles.error} role="alert">
                  {errors.overview.message}
                </p>
              )}
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
          {initialMovie?.id && (
            <input
              type="hidden"
              {...register("id", {
                value: initialMovie?.id,
                valueAsNumber: true,
              })}
            />
          )}
        </form>
      </div>
    </>
  );
};

export default MovieForm;
