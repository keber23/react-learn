import { render, screen } from "@testing-library/react";
import MovieDetails from "../Component/MovieDetails";

describe("MovieDetails", () => {
  const movie = {
    poster_path: "https://example.com/image.jpg",
    title: "Example Movie",
    release_date: "2022",
    vote_average: 8.5,
    runtime: 150,
    overview: "This is an example movie description.",
    genres: ["Action", "Adventure"],
  };

  test("renders movie details correctly", () => {
    render(<MovieDetails movie={movie} />);

    // Check if movie details are rendered correctly
    expect(screen.getByAltText(movie.title)).toBeInTheDocument();
    expect(screen.getByText(movie.title)).toBeInTheDocument();
    expect(screen.getByText(movie.release_date)).toBeInTheDocument();
    expect(screen.getByText(movie.vote_average)).toBeInTheDocument();
    expect(screen.getByText(movie.runtime)).toBeInTheDocument();
    expect(screen.getByText(movie.overview)).toBeInTheDocument();
    expect(screen.getByText(movie.genres.join(", "))).toBeInTheDocument();
  });
});
