import React from "react";
import { render, screen } from "@testing-library/react";
import MoviesFound from "../Component/MoviesFound";

describe("MoviesFound component", () => {
  test("displays the count when count is provided", () => {
    render(<MoviesFound count={5} />);

    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("movies found")).toBeInTheDocument();
  });

  test('displays "movie found" when count is 1', () => {
    render(<MoviesFound count={1} />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("movie found")).toBeInTheDocument();
  });

  test('displays "movies found" when count is greater than 1', () => {
    render(<MoviesFound count={10} />);

    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("movies found")).toBeInTheDocument();
  });

  test('displays "0 movies found" when count is 0', () => {
    render(<MoviesFound count={0} />);

    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("movies found")).toBeInTheDocument();
  });

  test('displays "1 movie found" when count is not provided', () => {
    render(<MoviesFound />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("movie found")).toBeInTheDocument();
  });
});
