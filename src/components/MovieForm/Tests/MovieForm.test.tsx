import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MovieForm from "../Component/MovieForm";
import { Movie } from "../../../types/movie";

describe("MovieForm", () => {
  const onSubmitMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders form with initial movie data", () => {
    const initialMovie: Movie = {
      title: "Test Movie",
      poster_path: "https://example.com/test-movie",
      genres: ["Comedy", "Horror"],
      release_date: "2022-03-15",
      vote_average: 7,
      runtime: 120,
      overview: "Test movie overview.",
    };

    render(<MovieForm initialMovie={initialMovie} onSubmit={onSubmitMock} />);

    expect(screen.getByLabelText(/Title/i)).toHaveValue("Test Movie");
    expect(screen.getByLabelText(/Movie URL/i)).toHaveValue(
      "https://example.com/test-movie"
    );
    expect(screen.getByLabelText(/Genre/i)).toHaveValue(["comedy", "horror"]);
    expect(screen.getByLabelText(/Release Date/i)).toHaveValue("2022-03-15");
    expect(screen.getByLabelText(/Rating/i)).toHaveValue(7);
    expect(screen.getByLabelText(/Runtime/i)).toHaveValue(120);
    expect(screen.getByLabelText(/Overview/i)).toHaveValue(
      "Test movie overview."
    );
  });

  test("calls onSubmit with form data when submitted", async () => {
    render(<MovieForm onSubmit={onSubmitMock} />);

    await userEvent.type(screen.getByLabelText(/Title/i), "Test Movie");
    await userEvent.type(
      screen.getByLabelText(/Movie URL/i),
      "https://example.com/test-movie"
    );
    await userEvent.selectOptions(screen.getByLabelText(/Genre/i), [
      "comedy",
      "horror",
    ]);

    await userEvent.clear(screen.getByLabelText(/Release Date/i));
    await userEvent.type(screen.getByLabelText(/Release Date/i), "2022-03-15");
    await userEvent.type(screen.getByLabelText(/Rating/i), "7");
    await userEvent.type(screen.getByLabelText(/Runtime/i), "120");
    await userEvent.type(
      screen.getByLabelText(/Overview/i),
      "Test movie overview"
    );

    await userEvent.click(screen.getByText(/Submit/i));

    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));

    await waitFor(() =>
      expect(onSubmitMock).toBeCalledWith({
        title: "Test Movie",
        poster_path: "https://example.com/test-movie",
        genres: ["comedy", "horror"],
        release_date: "2022-03-15",
        vote_average: 7,
        runtime: 120,
        overview: "Test movie overview",
      })
    );
  });

  test("resets form when reset button is clicked", () => {
    render(<MovieForm onSubmit={onSubmitMock} />);

    userEvent.type(screen.getByLabelText(/Title/i), "Test Movie");
    userEvent.type(
      screen.getByLabelText(/Movie URL/i),
      "https://example.com/test-movie"
    );
    userEvent.selectOptions(screen.getByLabelText(/Genre/i), [
      "comedy",
      "horror",
    ]);

    userEvent.type(screen.getByLabelText(/Release Date/i), "2022-03-15");
    userEvent.type(screen.getByLabelText(/Rating/i), "7");
    userEvent.type(screen.getByLabelText(/Runtime/i), "120");
    userEvent.type(screen.getByLabelText(/Overview/i), "Test movie overview");

    userEvent.click(screen.getByText(/Reset/i));

    expect(screen.getByLabelText(/Title/i)).toHaveValue("");
    expect(screen.getByLabelText(/Movie URL/i)).toHaveValue("");
    expect(screen.getByLabelText(/Genre/i)).toHaveValue([]);
    expect(screen.getByLabelText(/Release Date/i)).toHaveValue("");
    expect(screen.getByLabelText(/Rating/i)).toHaveValue(null);
    expect(screen.getByLabelText(/Runtime/i)).toHaveValue(null);
    expect(screen.getByLabelText(/Overview/i)).toHaveValue("");
  });

  test("displays validation messages for invalid input", async () => {
    render(<MovieForm onSubmit={() => {}} />);

    userEvent.click(screen.getByText(/Submit/i));

    expect(await screen.findAllByRole("alert")).toHaveLength(7);

    await waitFor(() =>
      expect(screen.queryAllByText(/Invalid URL/i)).toHaveLength(0)
    );
  });

  test("displays validation messages for invalid url", async () => {
    render(<MovieForm onSubmit={() => {}} />);

    userEvent.type(screen.getByLabelText(/Movie URL/i), "test");
    userEvent.click(screen.getByText(/Submit/i));

    expect(await screen.findAllByRole("alert")).toHaveLength(7);
    expect(await screen.findAllByText(/Invalid URL/i)).toHaveLength(1);
  });
});
