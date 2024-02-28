import { render, screen, fireEvent } from "@testing-library/react";
import GenreSelect, { Genre, genres } from "../Component/GenreSelect";

const selectedGenre: Genre = "COMEDY";

test("component renders all genres passed in props", () => {
  render(
    <GenreSelect
      genres={genres}
      selectedGenre={selectedGenre}
      onSelect={() => {}}
    />
  );
  genres.forEach((genre) => {
    const genreButton = screen.getByText(genre);
    expect(genreButton).toBeInTheDocument();
  });
});

test("component highlights a selected genre passed in props", () => {
  render(
    <GenreSelect
      genres={genres}
      selectedGenre={selectedGenre}
      onSelect={() => {}}
    />
  );
  const selectedGenreButton = screen.getByText(selectedGenre);
  expect(selectedGenreButton).toHaveClass("selected");
});

test('after a click event on a genre button, component calls "onSelect" callback with correct genre', () => {
  const onSelectMock = jest.fn();
  render(
    <GenreSelect
      genres={genres}
      selectedGenre={selectedGenre}
      onSelect={onSelectMock}
    />
  );
  const genreToSelect: Genre = "HORROR";
  const genreButton = screen.getByText(genreToSelect);
  fireEvent.click(genreButton);
  expect(onSelectMock).toHaveBeenCalledWith(genreToSelect);
});
