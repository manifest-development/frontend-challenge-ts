import { screen, render } from "@testing-library/react";
import FormNavBar from "../FormNavBar";
import "@testing-library/jest-dom";

describe("FormNavBar Component", () => {
  it("should only display step 1 as active/done when on step 1 of form", () => {
    render(<FormNavBar currentStep={1} />);
    const navStepOne = screen.getByText("1");
    const navStepTwo = screen.getByText("2");
    const navStepThree = screen.getByText("3");

    expect(navStepOne).toHaveStyle("opacity: 1");
    expect(navStepTwo).toHaveStyle("opacity: 0.45");
    expect(navStepThree).toHaveStyle("opacity: 0.45");
  });

  it("should only display step 1 and 2 as active/done when on step 2 of form", () => {
    render(<FormNavBar currentStep={2} />);
    const navStepOne = screen.getByText("1");
    const navStepTwo = screen.getByText("2");
    const navStepThree = screen.getByText("3");

    expect(navStepOne).toHaveStyle("opacity: 1");
    expect(navStepTwo).toHaveStyle("opacity: 1");
    expect(navStepThree).toHaveStyle("opacity: 0.45");
  });

  it("should display all three steps as active/done when on step 3 of form", () => {
    render(<FormNavBar currentStep={3} />);
    const navStepOne = screen.getByText("1");
    const navStepTwo = screen.getByText("2");
    const navStepThree = screen.getByText("3");

    expect(navStepOne).toHaveStyle("opacity: 1");
    expect(navStepTwo).toHaveStyle("opacity: 1");
    expect(navStepThree).toHaveStyle("opacity: 1");
  });

  it("should not display the three steps when current step is 4(on thank you page)", () => {
    render(<FormNavBar currentStep={4} />);

    // Checking to ensure the three steps aren't display when thank you page is mounted
    expect(screen.queryByText("1")).toBeNull();
    expect(screen.queryByText("2")).toBeNull();
    expect(screen.queryByText("3")).toBeNull();
  });
});
