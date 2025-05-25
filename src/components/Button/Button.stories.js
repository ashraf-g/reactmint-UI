import React from "react";
import Button from "./Button";
import "./Button.css";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        labels: {
          default: "Default",
          primary: "Primary",
          secondary: "Secondary",
        },
      },
      options: ["default", "primary", "secondary"],
    },
    children: {
      control: "text",
    },
    onClick: {
      action: "clicked",
    },
  },
  args: {
    children: "Click me",
  },
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#333333" },
      ],
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary Action",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary Action",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: "Disabled Button",
};
