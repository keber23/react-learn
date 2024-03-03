import { Movie } from "../../Types/movie";
import styles from "../Styles/MovieDetails.module.css";

interface Props {
  movie: Movie;
}

export default function MovieDetails({ movie }: Props) {
  const {
    imageUrl,
    movieName,
    releaseYear,
    rating,
    duration,
    description,
    genres,
  } = movie;

  return (
    <div className={styles.movieDetails}>
      <div className={styles.poster}>
        <img src={imageUrl} alt={movieName} />
      </div>
      <div className={styles.info}>
        <h2>{movieName}</h2>
        <span className={styles.rating}>{rating}</span> {/* Move rating here */}
        <p className={styles.genres}>{genres?.join(", ")}</p>
        <p>
          <span className={styles.releaseYear}>{releaseYear}</span>
          <span className={styles.duration}>{duration}</span>
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}
