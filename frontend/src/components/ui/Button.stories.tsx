import type { Meta, StoryObj } from "@storybook/react";
import { Button, type ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  args: {
    children: "Click me",
    variant: "primary"
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "ghost"]
    }
  }
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary"
  }
};

export const Ghost: Story = {
  args: {
    variant: "ghost"
  }
};
