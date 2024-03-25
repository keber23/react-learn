import { buildApiUrl } from "./buildApiUrl";

describe("buildApiUrl", () => {
  it("should build the API URL with default parameters", () => {
    const searchParams = {
      selectedSort: "release_date",
      searchQuery: "",
      selectedGenre: "ALL",
    };

    const apiUrl = buildApiUrl(searchParams);

    expect(apiUrl).toEqual(
      "http://localhost:4000/movies?sortBy=release_date&sortOrder=asc"
    );
  });

  it("should build the API URL with search query", () => {
    const searchParams = {
      selectedSort: "release_date",
      searchQuery: "movie",
      selectedGenre: "ALL",
    };

    const apiUrl = buildApiUrl(searchParams);

    expect(apiUrl).toEqual(
      "http://localhost:4000/movies?sortBy=release_date&sortOrder=asc&searchBy=title&search=movie"
    );
  });

  it("should build the API URL with selected genre", () => {
    const searchParams = {
      selectedSort: "release_date",
      searchQuery: "",
      selectedGenre: "Action",
    };

    const apiUrl = buildApiUrl(searchParams);

    expect(apiUrl).toEqual(
      "http://localhost:4000/movies?sortBy=release_date&sortOrder=asc&filter=Action"
    );
  });

  it("should build the API URL with both search query and selected genre", () => {
    const searchParams = {
      selectedSort: "release_date",
      searchQuery: "movie",
      selectedGenre: "Action",
    };

    const apiUrl = buildApiUrl(searchParams);

    expect(apiUrl).toEqual(
      "http://localhost:4000/movies?sortBy=release_date&sortOrder=asc&searchBy=title&search=movie&filter=Action"
    );
  });

  it("should build the API URL with sort", () => {
    const searchParams = {
      selectedSort: "title",
      searchQuery: "movie",
      selectedGenre: "Action",
    };

    const apiUrl = buildApiUrl(searchParams);

    expect(apiUrl).toEqual(
      "http://localhost:4000/movies?sortBy=title&sortOrder=asc&searchBy=title&search=movie&filter=Action"
    );
  });
});
