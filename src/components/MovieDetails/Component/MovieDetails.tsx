import { Movie } from "../../Types/movie";
import styles from "../Styles/MovieDetails.module.css";

interface Props {
  movie: Movie;
}

export default function MovieDetails({ movie }: Props) {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    runtime,
    overview,
    genres,
  } = movie;

  return (
    <div className={styles.movieDetails}>
      <div className={styles.poster}>
        <img src={poster_path} alt={title} />
      </div>
      <div className={styles.info}>
        <h2>{title}</h2>
        <span className={styles.rating}>{vote_average}</span>
        <p className={styles.genres}>{genres?.join(", ")}</p>
        <p>
          <span className={styles.release_date}>{release_date}</span>
          <span className={styles.duration}>{runtime}</span>
        </p>
        <p>{overview}</p>
      </div>
    </div>
  );
}
