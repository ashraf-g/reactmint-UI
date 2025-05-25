import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import Button from "./Button";

describe("Button Component", () => {
  // 1. Basic Rendering
  it("renders without crashing", () => {
    render(<Button />);
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });

  it("renders children text correctly", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByTestId("button")).toHaveTextContent("Click Me");
  });

  it("renders children elements correctly", () => {
    render(
      <Button>
        <span>Icon</span> Text
      </Button>
    );
    expect(screen.getByTestId("button")).toContainHTML(
      "<span>Icon</span> Text"
    );
  });

  // 2. Class Name Handling
  it("applies default class", () => {
    render(<Button />);
    expect(screen.getByTestId("button")).toHaveClass("button");
  });

  it("merges custom className correctly", () => {
    render(<Button className="custom-class" />);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass("button");
    expect(button).toHaveClass("custom-class");
  });

  it("handles empty className prop", () => {
    render(<Button className="" />);
    expect(screen.getByTestId("button")).toHaveClass("button");
  });

  // 3. Variant Handling
  it("applies default variant when none specified", () => {
    render(<Button />);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass("button");
    expect(button.className).not.toMatch(/button--/);
  });

  it("applies primary variant correctly", () => {
    render(<Button variant="primary" />);
    expect(screen.getByTestId("button")).toHaveClass("button--primary");
  });

  it("applies secondary variant correctly", () => {
    render(<Button variant="secondary" />);
    expect(screen.getByTestId("button")).toHaveClass("button--secondary");
  });

  it("handles unknown variant gracefully", () => {
    render(<Button variant="unknown" />);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass("button");
    expect(button.className).not.toMatch(/button--unknown/);
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

    const button = screen.getByTestId("button");
    fireEvent.click(button);

    expect(button).toHaveAttribute("id", "test-button");
    expect(button).toHaveAttribute("data-test", "test-data");
    expect(button).toHaveAttribute("aria-label", "Test Button");
    expect(onClick).toHaveBeenCalled();
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} />);
    fireEvent.click(screen.getByTestId("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // 5. Accessibility
  it("has proper role attribute", () => {
    render(<Button />);
    expect(screen.getByTestId("button")).toHaveAttribute("role", "button");
  });

  it("accepts aria-* props", () => {
    render(<Button aria-disabled="true" aria-label="Submit" />);
    const button = screen.getByTestId("button");
    expect(button).toHaveAttribute("aria-disabled", "true");
    expect(button).toHaveAttribute("aria-label", "Submit");
  });

  // 6. Edge Cases
  it("renders correctly with no children", () => {
    render(<Button />);
    expect(screen.getByTestId("button")).toBeEmptyDOMElement();
  });

  it("handles null/undefined children gracefully", () => {
    render(<Button>{null}</Button>);
    expect(screen.getByTestId("button")).toBeEmptyDOMElement();
  });

  it("combines multiple classNames correctly", () => {
    render(<Button className="class1 class2" variant="primary" />);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass("button");
    expect(button).toHaveClass("button--primary");
    expect(button).toHaveClass("class1");
    expect(button).toHaveClass("class2");
  });

  // 7. Snapshot Testing
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
