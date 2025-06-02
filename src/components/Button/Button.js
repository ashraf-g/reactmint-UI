import React from "react";
import "./Button.css";

const Button = ({
  children,
  className = "",
  variant = "default",
  disabled = false,
  ...props
}) => {
  const variantClass = `button--${variant}`;

  return (
    <button
      className={`button ${variantClass} ${className}`.trim()}
      data-testid="button"
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
