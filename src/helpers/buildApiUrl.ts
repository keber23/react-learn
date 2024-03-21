import { SearchParams } from "../types";

export function buildApiUrl(searchParams: SearchParams): string {
  let apiUrl = "http://localhost:4000/movies";

  apiUrl += `?sortBy=${searchParams.selectedSort}&sortOrder=asc`;

  if (searchParams.searchQuery) {
    apiUrl += `&searchBy=title&search=${searchParams.searchQuery}`;
  }

  if (searchParams.selectedGenre && searchParams.selectedGenre !== "ALL") {
    apiUrl += `&filter=${searchParams.selectedGenre}`;
  }

  return apiUrl;
}
