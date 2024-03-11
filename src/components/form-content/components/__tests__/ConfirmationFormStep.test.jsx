import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { mockBackToPreviousStep, mockConfirmForm } from "../../../../mocks/FormProviderMocks";
import ConfirmationFormStep from "../ConfirmationFormStep";

describe("ConfirmationFormStep Component", () => {
  it("should display the user's name", () => {
    render(
      <ConfirmationFormStep
        localData={{ name: "Bart Swierz", income: 40000, education: "Bachelor's degree" }}
        backToPreviousStep={mockBackToPreviousStep}
        confirmForm={mockConfirmForm}
      />
    );

    const nameText = screen.getByText(/bart swierz/i);

    //Expect it to be in document
    expect(nameText).toBeInTheDocument();
  });

  it("should display the income in USD format", () => {
    render(
      <ConfirmationFormStep
        localData={{ name: "Bart Swierz", income: 40000, education: "Bachelor's degree" }}
        backToPreviousStep={mockBackToPreviousStep}
        confirmForm={mockConfirmForm}
      />
    );

    // 40000 => $40,000.00
    const incomeText = screen.getByText(/\$40,000\.00/i);

    expect(incomeText).toBeInTheDocument();
  });

  it("should display the income in USD format", () => {
    render(
      <ConfirmationFormStep
        localData={{ name: "Bart Swierz", income: 40000, education: "Bachelor's degree" }}
        backToPreviousStep={mockBackToPreviousStep}
        confirmForm={mockConfirmForm}
      />
    );

    // 40000 => $40,000.00
    const educationText = screen.getByText(/bachelor's degree/i);

    expect(educationText).toBeInTheDocument();
  });
});
