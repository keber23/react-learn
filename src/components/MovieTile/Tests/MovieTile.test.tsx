import { render, screen, fireEvent } from "@testing-library/react";
import MovieTile from "../Component/MovieTile";

describe("MovieTile", () => {
  const movie = {
    imageUrl: "https://example.com/image.jpg",
    movieName: "Example Movie",
    releaseYear: 2022,
    genres: ["Action", "Adventure"],
  };

  const onClick = jest.fn();
  const onEdit = jest.fn();
  const onDelete = jest.fn();

  test("renders movie information correctly", () => {
    render(
      <MovieTile
        movie={movie}
        onClick={onClick}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );

    // Check if movie information is rendered correctly
    expect(screen.getByAltText(movie.movieName)).toBeInTheDocument();
    expect(screen.getByText(movie.movieName)).toBeInTheDocument();
    expect(screen.getByText(`${movie.releaseYear}`)).toBeInTheDocument();
    expect(screen.getByText(`${movie.genres.join(", ")}`)).toBeInTheDocument();
  });

  test("calls onClick callback when clicked", () => {
    render(
      <MovieTile
        movie={movie}
        onClick={onClick}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );

    fireEvent.click(screen.getByText(movie.movieName));
    expect(onClick).toHaveBeenCalledWith(movie);
  });

  test("calls onEdit callback when Edit button in context menu is clicked", () => {
    render(
      <MovieTile
        movie={movie}
        onClick={onClick}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );

    fireEvent.click(screen.getByText("..."));
    fireEvent.click(screen.getByText("Edit"));
    expect(onEdit).toHaveBeenCalledWith(movie);
  });

  test("calls onDelete callback when Delete button in context menu is clicked", () => {
    render(
      <MovieTile
        movie={movie}
        onClick={onClick}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );

    fireEvent.click(screen.getByText("..."));
    fireEvent.click(screen.getByText("Delete"));
    expect(onDelete).toHaveBeenCalledWith(movie);
  });
});
