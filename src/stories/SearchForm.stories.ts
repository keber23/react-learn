import type { Meta, StoryObj } from "@storybook/react";

import { SearchForm } from "../components";

const meta = {
  title: "EPAM React/SearchForm",
  component: SearchForm,
  parameters: {
    layout: "centered",
  },

  argTypes: {},
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    initialSearchText: "",
  },
};

export const WithInitialValue: Story = {
  args: {
    initialSearchText: "Sample Search Text",
  },
};
