import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormContent from "../FormContent";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import {
  mockFormStep,
  mockUserData,
  mockUpdateUserData,
  mockConfirmForm,
  mockBackToPreviousStep,
  mockSubmitAnotherForm,
  // mockIsLoading,
} from "../../../mocks/FormProviderMocks";

/*
STEP 1:
id="input-name" - Name
id="input-income" - Income
id="form-step-1-next" - Next Button

STEP 2:
id="input-education" - Education
id="form-step-2-next" - Next Button

STEP 3:
id="confirmation-name" - Name
id="confirmation-income" - Income
id="confirmation-education" - Education
id="form-confirmation-back-button" - Back Button
id="form-confirmation-button" - Confirmation Button

STEP 4 - Thank You Page:
id="submit-another-btn" - Thank You Page - Submit Another btn
*/

describe("FormContent", () => {
  it("should display Step 1 on initial load", () => {
    render(
      <FormContent
        currentStep={mockFormStep}
        updateUserData={mockUpdateUserData}
        userData={mockUserData}
        confirmForm={mockConfirmForm}
        backToPreviousStep={mockBackToPreviousStep}
        submitAnotherForm={mockSubmitAnotherForm}
      />
    );

    // Assert that Step 1 elements are rendered
    const headingElement = screen.getByRole("heading", { name: /basic information/i });

    expect(headingElement).toBeInTheDocument();
  });

  // it should have next button disabled on initial load
  it("should have next button disabled on initial load", () => {
    render(
      <FormContent
        currentStep={mockFormStep}
        updateUserData={mockUpdateUserData}
        userData={mockUserData}
        confirmForm={mockConfirmForm}
        backToPreviousStep={mockBackToPreviousStep}
        submitAnotherForm={mockSubmitAnotherForm}
      />
    );

    const nextButton = screen.getByRole("button", { name: /next/i });
    expect(nextButton).toBeDisabled();
  });

  it("should enable next button when name is has at least one letter input", async () => {
    const user = userEvent.setup();

    render(
      <FormContent
        currentStep={mockFormStep}
        updateUserData={mockUpdateUserData}
        userData={mockUserData}
        confirmForm={mockConfirmForm}
        backToPreviousStep={mockBackToPreviousStep}
        submitAnotherForm={mockSubmitAnotherForm}
      />
    );

    const nameInput = screen.getByLabelText(/name/i);
    const nextButton = screen.getByRole("button", { name: /next/i });

    // Assert that next button is disabled
    expect(nextButton).toBeDisabled();

    // Wrapped in act because user.type will trigger a state update(our localData will be updated with the input value)
    await act(async () => {
      await user.type(nameInput, "A");
    });

    // Assert that next button is enabled
    expect(nextButton).toBeEnabled();
  });

  it("should disable button after if user deletes their name input", async () => {
    const user = userEvent.setup();

    render(
      <FormContent
        currentStep={mockFormStep}
        updateUserData={mockUpdateUserData}
        userData={mockUserData}
        confirmForm={mockConfirmForm}
        backToPreviousStep={mockBackToPreviousStep}
        submitAnotherForm={mockSubmitAnotherForm}
      />
    );

    const nameInput = screen.getByLabelText(/name/i);
    const nextButton = screen.getByRole("button", { name: /next/i });

    // Button is initially disabled
    expect(nextButton).toBeDisabled();

    // Type a letter to enable the next button
    await act(async () => {
      await user.type(nameInput, "A");
    });

    // Assert that next button is enabled
    expect(nextButton).toBeEnabled();

    // remove the letter to disable the next button
    await act(async () => {
      await user.clear(nameInput);
    });

    // Assert that next button is disabled
    expect(nextButton).toBeDisabled();
  });
});
