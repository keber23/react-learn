import type { Meta, StoryObj } from "@storybook/react";

import { Dialog } from "../components";
import styles from "../App.module.css";
const meta = {
  title: "EPAM React/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DeleteMovie: Story = {
  args: {
    title: "Delete Movie",
    children: (
      <>
        <p>Are you sure you want to delete this movie?</p>
        <button className={styles.btnConfirm} onClick={() => {}}>
          Confirm
        </button>
      </>
    ),
  },
};
