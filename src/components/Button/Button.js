import React from "react";
import "./Button.css";

const Button = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const variantClass = ["primary", "secondary"].includes(variant)
    ? `button--${variant}`
    : "";

  return (
    <div
      className={`button ${variantClass} ${className}`.trim()}
      data-testid="button"
      role="button"
      {...props}
    >
      {children}
    </div>
  );
};

export default Button;
