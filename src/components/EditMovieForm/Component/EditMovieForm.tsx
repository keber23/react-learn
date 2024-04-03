import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Dialog, MovieForm } from "../..";
import { Movie } from "../../../types";
import useAddUpdateMovieQuery from "../../../hooks/useAddUpdateMovieQuery";
import useMovieQuery from "../../../hooks/useMovieQuery";

export default function EditMovieForm() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { mutate, data, isSuccess } = useAddUpdateMovieQuery();

  let { movieId } = useParams();

  const { data: movie } = useMovieQuery(movieId as string);

  function hideDialogAddMovie(): void {
    navigate({ pathname: `/${movieId}`, search: searchParams.toString() });
  }

  function onSubmitMovie(movie: Movie) {
    mutate(movie);
  }

  if (isSuccess) {
    navigate({
      pathname: `/${data?.id}`,
      search: searchParams.toString(),
    });
  }

  return (
    <Dialog title="EDIT MOVIE" onClose={hideDialogAddMovie}>
      <MovieForm onSubmit={onSubmitMovie} initialMovie={movie} />
    </Dialog>
  );
}
