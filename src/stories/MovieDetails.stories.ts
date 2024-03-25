import type { Meta, StoryObj } from "@storybook/react";

import { MovieDetails } from "../components";
import { Movie } from "../types/movie";

const mockMovie: Movie = {
  poster_path: "https://picsum.photos/id/1/200/200",
  title: "Sample Movie",
  release_date: "2022-09-21",
  vote_average: 8.5,
  runtime: 150,
  overview: "This is an example movie description.",
  genres: ["Comedy", "Crime"],
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
      poster_path: "",
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
