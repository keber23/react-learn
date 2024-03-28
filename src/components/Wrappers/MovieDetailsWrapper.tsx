import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import MovieDetails from "../MovieDetails/Component/MovieDetails";
import { Movie } from "../../types";
import useMovieQuery from "../../hooks/useMovieQuery";
import styles from "../../pages/MovieListPage/Styles/MovieListPage.module.css";

// export function loader({ params }: any) {
//   return params.movieId;
// }

export default function MovieDetailsWrapper() {
  //const movieId = useLoaderData() as string;

  let { movieId } = useParams();

  const { data } = useMovieQuery(movieId as string);

  const navigate = useNavigate();
  const location = useLocation(); // React Hook
  
  
  const movie = data as Movie | undefined;

  if (movie === undefined) {
    return <p>Movie not found</p>;
  }

  function onCloseClick(): void {
    //navigate(`/${movie?.id}`);
    navigate(location.pathname);
    //console.log(location.pathname); // returns relative path, without domain name
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
