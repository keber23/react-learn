import type { Meta, StoryObj } from "@storybook/react";

import { MovieDetails } from "../components";
import { Movie } from "../components/Types/movie";

const mockMovie: Movie = {
  posterPath: "https://picsum.photos/id/1/200/200",
  title: "Sample Movie",
  releaseDate: "2022-09-21",
  voteAverage: 8.5,
  runtime: 150,
  overview: "This is an example movie description.",
  genres: ["Action", "Adventure"],
};

const meta = {
  title: "EPAM React/MovieDetails",
  component: MovieDetails,
  parameters: {
    layout: "centered",
  },

  argTypes: {},
} satisfies Meta<typeof MovieDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    movie: mockMovie,
  },
};

export const NoImage: Story = {
  args: {
    movie: {
      ...mockMovie,
      posterPath: "",
    },
  },
};

export const NoGenres: Story = {
  args: {
    movie: {
      ...mockMovie,
      genres: [],
    },
  },
};
