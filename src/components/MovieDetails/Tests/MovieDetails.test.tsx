import { render, screen } from "@testing-library/react";
import MovieDetails from "../Component/MovieDetails";
import { formatDuration } from "../../../utils/formatDuration";
import { Movie } from "../../Types/movie";

describe("MovieDetails", () => {
  let movie: Movie = {
    posterPath: "https://example.com/image.jpg",
    title: "Example Movie",
    releaseDate: "2022",
    voteAverage: 8.5,
    runtime: 150,
    overview: "This is an example movie description.",
    genres: ["Action", "Adventure"],
  };

  test("renders movie details correctly", () => {
    render(<MovieDetails movie={movie} />);

    // Check if movie details are rendered correctly
    expect(screen.getByAltText(movie.title!)).toBeInTheDocument();
    expect(screen.getByText(movie.title!)).toBeInTheDocument();
    expect(screen.getByText(movie.releaseDate!)).toBeInTheDocument();
    expect(screen.getByText(movie.voteAverage!)).toBeInTheDocument();
    expect(screen.getByText(formatDuration(movie.runtime))).toBeInTheDocument();
    expect(screen.getByText(movie.overview!)).toBeInTheDocument();
    expect(screen.getByText(`${movie.genres?.join(", ")}`)).toBeInTheDocument();
  });
});
