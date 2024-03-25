import type { Meta, StoryObj } from "@storybook/react";

import App from "../App";

const meta = {
  title: "EPAM React/AppPage",
  component: App,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
