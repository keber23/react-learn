import type { Meta, StoryObj } from "@storybook/react";

import { SortControl } from "../components";
import { displayValues } from "../components/SortControl/Component/SortControl";
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
    displayValues: displayValues,
  },
};

export const ReleaseDateSelection: Story = {
  args: {
    displayValues: displayValues,
    initialSelection: displayValues[0],
  },
};

export const TitleSelection: Story = {
  args: {
    displayValues: displayValues,
    initialSelection: displayValues[1],
  },
};
