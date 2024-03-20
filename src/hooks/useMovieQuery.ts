import { useQuery } from "react-query";
import axios from "axios";
import { Movie } from "../components";
import useBuildApiUrl from "./useBuildApiUrl";

type ApiData = {
  totalAmount: number;
  data: Movie[];
  offset: number;
  limit: number;
};

const useMovieQuery = (
  searchQuery: string,
  selectedGenre: string,
  selectedSort: string
) => {
  const apiUrl = useBuildApiUrl(searchQuery, selectedGenre, selectedSort);

  const { isLoading, data, error } = useQuery({
    queryKey: ["movies", searchQuery, selectedGenre, selectedSort],
    queryFn: ({ signal }) => {
      return axios
        .get<ApiData>(apiUrl, { signal })
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          return data.data;
        });
    },
  });

  return { isLoading, data, error };
};

export default useMovieQuery;
