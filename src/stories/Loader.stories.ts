import type { Meta, StoryObj } from "@storybook/react";

import { Loader } from "../components";

const meta = {
  title: "EPAM React/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },

  argTypes: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultText: Story = {
  args: {},
};

export const CustomText: Story = {
  args: {
    loadingText: "Custom Loading Text",
  },
};
