import { render, screen } from "@testing-library/react";
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
        currentStep={1}
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

  it("should take user back to step 1 after clicking the back button on step 2", async () => {
    const user = userEvent.setup();
    // let mockCurrentStep = 2;
    let currentStep = 2;

    // rerender the component when user clicks the back button
    const { rerender } = render(
      <FormContent
        currentStep={currentStep}
        updateUserData={mockUpdateUserData}
        userData={mockUserData}
        confirmForm={mockConfirmForm}
        // This renders the step one component when the back button is clicked
        backToPreviousStep={() => {
          currentStep--;
          rerender(
            <FormContent
              currentStep={currentStep}
              updateUserData={mockUpdateUserData}
              userData={mockUserData}
              confirmForm={mockConfirmForm}
              backToPreviousStep={() => {
                currentStep--;
              }}
              submitAnotherForm={mockSubmitAnotherForm}
            />
          );
        }} // Mocked backToPreviousStep function
        submitAnotherForm={mockSubmitAnotherForm}
      />
    );

    const backButton = screen.getByRole("button", { name: /go back to step one/i });
    expect(backButton).toBeInTheDocument();

    // user will click the back button on step 2
    await user.click(backButton);

    expect(screen.getByRole("heading", { name: /basic information/i })).toBeInTheDocument();
  });

  it("should take user back to step 2 after clicking the back button on the confirmation page", async () => {
    const user = userEvent.setup();
    // let mockCurrentStep = 2;
    let currentStep = 3;

    // rerender the component when user clicks the back button
    const { rerender } = render(
      <FormContent
        currentStep={currentStep}
        updateUserData={mockUpdateUserData}
        userData={mockUserData}
        confirmForm={mockConfirmForm}
        // This renders the step two component when the back button is clicked
        backToPreviousStep={() => {
          currentStep--;
          rerender(
            <FormContent
              currentStep={currentStep}
              updateUserData={mockUpdateUserData}
              userData={mockUserData}
              confirmForm={mockConfirmForm}
              backToPreviousStep={() => {
                currentStep--;
              }}
              submitAnotherForm={mockSubmitAnotherForm}
            />
          );
        }} // Mocked backToPreviousStep function
        submitAnotherForm={mockSubmitAnotherForm}
      />
    );

    const backButton = screen.getByRole("button", { name: /go back to step two/i });
    expect(backButton).toBeInTheDocument();

    // user will click the back button on step 2
    await user.click(backButton);

    expect(screen.getByRole("heading", { name: /education level/i })).toBeInTheDocument();
  });
});
