import { render, screen } from "@testing-library/react";
import MovieDetails from "../Component/MovieDetails";

describe("MovieDetails", () => {
  const movie = {
    imageUrl: "https://example.com/image.jpg",
    movieName: "Example Movie",
    releaseYear: 2022,
    rating: 8.5,
    duration: "2h 30min",
    description: "This is an example movie description.",
    genres: ["Action", "Adventure"],
  };

  test("renders movie details correctly", () => {
    render(<MovieDetails movie={movie} />);

    // Check if movie details are rendered correctly
    expect(screen.getByAltText(movie.movieName)).toBeInTheDocument();
    expect(screen.getByText(movie.movieName)).toBeInTheDocument();
    expect(screen.getByText(movie.releaseYear)).toBeInTheDocument();
    expect(screen.getByText(movie.rating)).toBeInTheDocument();
    expect(screen.getByText(movie.duration)).toBeInTheDocument();
    expect(screen.getByText(movie.description)).toBeInTheDocument();
    expect(screen.getByText(movie.genres.join(", "))).toBeInTheDocument();
  });
});
