import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  // 1. Basic Rendering
  it("renders without crashing", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders children text correctly", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click Me");
  });

  it("renders children elements correctly", () => {
    render(
      <Button>
        <span>Icon</span> Text
      </Button>
    );
    expect(screen.getByRole("button")).toContainHTML("<span>Icon</span> Text");
  });

  // 2. Class Name Handling
  it("applies default class", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toHaveClass("button");
  });

  it("merges custom className correctly", () => {
    render(<Button className="custom-class" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button");
    expect(button).toHaveClass("custom-class");
  });

  // 3. Variant Handling
  it("applies default variant when none specified", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button");
    expect(button).not.toHaveClass("button--primary");
    expect(button).not.toHaveClass("button--secondary");
  });

  it("applies primary variant correctly", () => {
    render(<Button variant="primary" />);
    expect(screen.getByRole("button")).toHaveClass("button--primary");
  });

  it("applies secondary variant correctly", () => {
    render(<Button variant="secondary" />);
    expect(screen.getByRole("button")).toHaveClass("button--secondary");
  });

  it("handles unknown variant gracefully", () => {
    render(<Button variant="unknown" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button");
    expect(button).not.toHaveClass("button--unknown");
  });

  // 4. Props Handling
  it("passes all other props to the button element", () => {
    const onClick = jest.fn();
    render(
      <Button
        id="test-button"
        data-test="test-data"
        aria-label="Test Button"
        onClick={onClick}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(button).toHaveAttribute("id", "test-button");
    expect(button).toHaveAttribute("data-test", "test-data");
    expect(button).toHaveAttribute("aria-label", "Test Button");
    expect(onClick).toHaveBeenCalled();
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // 5. Accessibility - Removed redundant role test since native button has implicit role
  it("accepts aria-* props", () => {
    render(<Button aria-disabled="true" aria-label="Submit" />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-disabled", "true");
    expect(button).toHaveAttribute("aria-label", "Submit");
  });

  // 6. Edge Cases
  it("renders correctly with no children", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toBeEmptyDOMElement();
  });

  it("combines multiple classNames correctly", () => {
    render(<Button className="class1 class2" variant="primary" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button");
    expect(button).toHaveClass("button--primary");
    expect(button).toHaveClass("class1");
    expect(button).toHaveClass("class2");
  });

  // 7. Updated Snapshot Tests
  it("matches default button snapshot", () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches primary variant snapshot", () => {
    const { asFragment } = render(<Button variant="primary">Primary</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches button with custom class snapshot", () => {
    const { asFragment } = render(<Button className="custom">Custom</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});