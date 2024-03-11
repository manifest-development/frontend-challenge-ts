import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button";

describe("Button Component", () => {
  it('should render a button with text "Next"', () => {
    render(<Button>Next</Button>);

    const button = screen.getByText("Next");

    expect(button).toBeInTheDocument();
  });

  it("should disable button when disabled prop is passed", () => {
    render(<Button disabled>Next</Button>);

    const button = screen.getByText("Next");

    expect(button).toBeDisabled();
  });

  it("should call the onClick function when button is clicked", () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>Next</Button>);

    const button = screen.getByText("Next");
    button.click();

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("should apply aria-label to the button when passed as a prop", () => {
    render(<Button aria-label="aria label should have this text">Next</Button>);

    const button = screen.getByLabelText(/aria label should have this text/i);

    expect(button).toBeInTheDocument();
  });
});
