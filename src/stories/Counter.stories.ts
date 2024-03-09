import type { Meta, StoryObj } from "@storybook/react";
import { Counter } from "../components";

const meta = {
  title: "EPAM React/Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InitialValue_1: Story = {
  args: {
    initialValue: 1,
  },
};

export const InitialValue_10: Story = {
  args: {
    initialValue: 10,
  },
};
