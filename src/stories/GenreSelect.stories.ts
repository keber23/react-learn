import type { Meta, StoryObj } from "@storybook/react";

import { Genre, GenreSelect } from "../components";
import { genres } from "../components/GenreSelect/Component/GenreSelect";

const selectedGenre: Genre = "COMEDY";

const meta = {
  title: "EPAM React/GenreSelect",
  component: GenreSelect,
  parameters: {
    layout: "centered",
  },

  argTypes: {},
} satisfies Meta<typeof GenreSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    genres: genres,
    selectedGenre: selectedGenre,
  },
};
