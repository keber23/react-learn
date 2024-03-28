import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import MovieDetails from "../MovieDetails/Component/MovieDetails";
import { Movie } from "../../types";
import useMovieQuery from "../../hooks/useMovieQuery";
import styles from "../../pages/MovieListPage/Styles/MovieListPage.module.css";

// export function loader({ params }: any) {
//   return params.movieId;
// }

export default function MovieDetailsWrapper() {
  //const movieId = useLoaderData() as string;
  const [searchParams] = useSearchParams();

  let { movieId } = useParams();

  const { data } = useMovieQuery(movieId as string);

  const navigate = useNavigate();

  const movie = data as Movie | undefined;

  if (movie === undefined) {
    return <p>Movie not found</p>;
  }

  function onCloseClick(): void {
    navigate({ pathname: `/`, search: searchParams.toString() });
  }

  return (
    <section className={styles.movieDetailsContainer}>
      <button className={styles.closeButton} onClick={() => onCloseClick()}>
        Close
      </button>
      <MovieDetails movie={movie} />
    </section>
  );
}
