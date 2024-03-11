import { render, screen } from "@testing-library/react";
import FormStepTwo from "../FormStepTwo";
import "@testing-library/jest-dom";

describe("FormStepTwo Component", () => {
  // const mockLocalData = { name: "", income: 0, education: "" };
  const mockUpdateField = jest.fn((key, value) => {
    mockLocalData[key] = value;
  });

  const mockLocalData = { name: "Bart Swierz", income: 40000, Education: "Bachelor's Degree" };
  const mockSubmitForm = jest.fn();

  it("should have Next Button disabled when education is empty", () => {
    render(
      <FormStepTwo
        localData={{ name: "John Doe", income: 0, education: "" }}
        submitForm={mockSubmitForm}
        updateField={mockUpdateField}
      />
    );

    expect(
      screen.getByRole("heading", {
        name: /education level/i,
      })
    ).toBeInTheDocument();

    const nextButton = screen.getByRole("button", { name: /go to step three/i });
    expect(nextButton).toBeInTheDocument();

    expect(nextButton).toBeDisabled();
  });

  it("should have Next Button disabled when education is filled", () => {
    render(
      <FormStepTwo
        localData={{ name: "John Doe", income: 0, education: "Bachelor's Degree" }}
        submitForm={mockSubmitForm}
        updateField={mockUpdateField}
      />
    );

    //Used a meaningful aria-label for the button for screen readers
    const nextButton = screen.getByRole("button", { name: /go to step three/i });
    expect(nextButton).toBeInTheDocument();

    expect(nextButton).toBeEnabled();
  });
});
