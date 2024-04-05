import { useNavigate, useSearchParams } from "react-router-dom";
import { Dialog, MovieForm } from "../../";
import { Movie } from "../../../types";
import useAddUpdateMovieQuery from "../../../hooks/useAddUpdateMovieQuery";

export default function AddMovieForm() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { mutate, data, isSuccess, error, isError } = useAddUpdateMovieQuery();

  const hideDialogAddMovie = () => {
    navigate({ pathname: `/`, search: searchParams.toString() });
  };

  if (isSuccess) {
    navigate({
      pathname: `/${data?.id}`,
      search: searchParams.toString(),
    });
  }

  if (isError) {
    throw new Error("oh dang!");
  }

  const onSubmitMovie = (movie: Movie) => {
    mutate(movie);
  };

  return (
    <Dialog title="ADD MOVIE" onClose={hideDialogAddMovie}>
      <MovieForm onSubmit={onSubmitMovie} />
    </Dialog>
  );
}
