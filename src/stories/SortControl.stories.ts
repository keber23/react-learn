import type { Meta, StoryObj } from "@storybook/react";

import { SortControl } from "../components";

const meta = {
  title: "EPAM React/SortControl",
  component: SortControl,
  parameters: {
    layout: "centered",
  },

  argTypes: {},
} satisfies Meta<typeof SortControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptySelection: Story = {
  args: {},
};

export const ReleaseDateSelection: Story = {
  args: {
    initialSelection: "release_date",
  },
};

export const TitleSelection: Story = {
  args: {
    initialSelection: "title",
  },
};
