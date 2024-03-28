import { useQuery } from "react-query";
import axios from "axios";

import { buildApiUrl } from "../helpers";
import { SearchParams, ApiData } from "../types";

const useMoviesQuery = (searchParams: SearchParams) => {
  const apiUrl = buildApiUrl(searchParams);

  const { isLoading, data, error } = useQuery({
    queryKey: ["movies", apiUrl],
    queryFn: ({ signal }) => {
      return axios.get<ApiData>(apiUrl, { signal }).then((res) => {
        return res.data.data;
      });
    },
  });

  return { isLoading, data, error };
};

export default useMoviesQuery;
