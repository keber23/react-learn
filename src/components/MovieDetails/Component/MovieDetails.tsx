import { extractYear } from "../../../utils/extractYear";
import { formatDuration } from "../../../utils/formatDuration";
import { Movie } from "../../Types/movie";
import styles from "../Styles/MovieDetails.module.css";
import defaultPosterUrl from "../../../assets/Images/200.png";
interface Props {
  movie: Movie;
}

export default function MovieDetails({ movie }: Props) {
  const {
    posterPath,
    title,
    releaseDate,
    voteAverage,
    runtime,
    overview,
    genres,
  } = movie;

  return (
    <div className={styles.movieDetails}>
      <div className={styles.poster}>
        <img
          src={posterPath || defaultPosterUrl}
          alt={title}
          style={{ width: "323", height: "486px" }}
        />
      </div>
      <div className={styles.info}>
        <h2>{title}</h2>
        <span className={styles.rating}>{voteAverage}</span>
        <p className={styles.genres}>{genres?.join(", ")}</p>
        <p>
          <span className={styles["release-date"]}>
            {extractYear(releaseDate)}
          </span>
          <span className={styles.duration}>{formatDuration(runtime)}</span>
        </p>
        <p>{overview}</p>
      </div>
    </div>
  );
}
