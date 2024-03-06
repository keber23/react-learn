import type { Meta, StoryObj } from "@storybook/react";

import { SortControl } from "../components";
import { sortOptions } from "../components/SortControl/Component/SortControl";
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
  args: {
    sortOptions: sortOptions,
  },
};

export const ReleaseDateSelection: Story = {
  args: {
    sortOptions: sortOptions,
    initialSelection: sortOptions[0],
  },
};

export const TitleSelection: Story = {
  args: {
    sortOptions: sortOptions,
    initialSelection: sortOptions[1],
  },
};
