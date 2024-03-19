import { render, screen, fireEvent } from "@testing-library/react";
import MovieTile from "../Component/MovieTile";
import { Movie } from "../../Types/movie";
import { extractYear } from "../../../utils/extractYear";

describe("MovieTile", () => {
  let onClick: jest.Mock;
  let onEdit: jest.Mock;
  let onDelete: jest.Mock;
  let movie: Movie;

  beforeEach(() => {
    onClick = jest.fn();
    onEdit = jest.fn();
    onDelete = jest.fn();

    movie = {
      poster_path: "https://example.com/image.jpg",
      title: "Example Movie",
      release_date: "2022-09-30",
      genres: ["Action", "Adventure"],
    };
  });

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
    expect(screen.getByAltText(movie.title!)).toBeInTheDocument();
    expect(screen.getByText(movie.title!)).toBeInTheDocument();
    expect(
      screen.getByText(extractYear(movie.release_date))
    ).toBeInTheDocument();
    expect(screen.getByText(`${movie.genres?.join(", ")}`)).toBeInTheDocument();
    expect(screen.queryByText("Edit")).not.toBeInTheDocument();
    expect(screen.queryByText("Delete")).not.toBeInTheDocument();
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

    fireEvent.click(screen.getByText(movie.title!));
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
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Edit"));
    expect(onEdit).toHaveBeenCalledWith(movie);
    expect(screen.queryByText("Edit")).not.toBeInTheDocument();
    expect(screen.queryByText("Delete")).not.toBeInTheDocument();
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
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Delete"));
    expect(onDelete).toHaveBeenCalledWith(movie);
    expect(screen.queryByText("Edit")).not.toBeInTheDocument();
    expect(screen.queryByText("Delete")).not.toBeInTheDocument();
  });
});
