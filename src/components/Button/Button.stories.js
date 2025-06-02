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
          disabled: "Disabled",
          tertiary: "Tertiary",
          outline: "Outline",
          ghost: "Ghost",
          success: "Success",
          warning: "Warning",
          danger: "Danger",
          link: "Link",
        },
      },
      options: [
        "default",
        "primary",
        "secondary",
        "disabled",
        "tertiary",
        "outline",
        "ghost",
        "success",
        "warning",
        "danger",
        "link",
      ],
      defaultValue: "default",
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
    viewport: { defaultViewport: "mobile" },
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

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
  children: "Tertiary Action",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  children: "Outline Action",
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: "ghost",
  children: "Ghost Action",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  children: "Success Action",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  children: "Warning Action",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  children: "Danger Action",
};

export const Link = Template.bind({});
Link.args = {
  variant: "link",
  children: "Link Action",
};
