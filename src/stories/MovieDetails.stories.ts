import type { Meta, StoryObj } from "@storybook/react";

import { MovieDetails } from "../components";
import { Movie } from "../components/Types/movie";

const mockMovie: Movie = {
  imageUrl: "https://via.placeholder.com/150",
  movieName: "Sample Movie",
  releaseYear: 2022,
  rating: 8.5,
  duration: "2h 30min",
  description: "This is an example movie description.",
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
      imageUrl: "",
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
