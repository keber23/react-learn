import type { Meta, StoryObj } from "@storybook/react";

import { MovieTile } from "../components";
import { Movie } from "../components/Types/movie";

const mockMovie: Movie = {
  posterPath: "https://via.placeholder.com/150",
  title: "Sample Movie",
  releaseDate: "2022",
  genres: ["Action", "Adventure"],
};

const meta = {
  title: "EPAM React/MovieTile",
  component: MovieTile,
  parameters: {
    layout: "centered",
  },

  argTypes: {},
} satisfies Meta<typeof MovieTile>;

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
