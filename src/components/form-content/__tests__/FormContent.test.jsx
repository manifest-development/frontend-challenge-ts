import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import FormContent from "../FormContent";
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
  test("should display Step 1 on initial load", () => {
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
});
