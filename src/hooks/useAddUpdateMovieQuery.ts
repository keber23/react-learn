import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { Movie } from "../types";

const useAddUpdateMovieQuery = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, data, error, isSuccess } = useMutation({
    mutationFn: (movie: Movie) => {
      if (movie.id) {
        return axios
          .put<Movie>("http://localhost:4000/movies", movie)
          .then((res) => res.data);
      } else {
        return axios
          .post<Movie>("http://localhost:4000/movies", movie)
          .then((res) => res.data);
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries();
    },
  });

  return { mutate, isLoading, data, error, isSuccess };
};

export default useAddUpdateMovieQuery;
