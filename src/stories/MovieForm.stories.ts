import type { Meta, StoryObj } from "@storybook/react";

import { MovieForm } from "../components";
import { Movie } from "../components/Types/movie";

const mockMovie: Movie = {
  posterPath: "https://picsum.photos/id/1/200/200",
  title: "Sample Movie",
  releaseDate: "2022-09-21",
  voteAverage: 8.5,
  runtime: 150,
  overview: "This is an example movie description.",
  genres: ["Comedy", "Crime"],
};

const meta = {
  title: "EPAM React/MovieForm",
  component: MovieForm,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof MovieForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddMovie: Story = {
  args: {},
};

export const EditMovie: Story = {
  args: {
    initialMovie: mockMovie,
  },
};
