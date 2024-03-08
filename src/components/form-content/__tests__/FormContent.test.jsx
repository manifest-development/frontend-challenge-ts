import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormContent from "../FormContent";
// import "@testing-library/jest-dom";
import { User } from "../../../class/user";
// import App from "../../../App";
// import FormContent from "../FormContent";
import { FormContext, FormProvider } from "../../../context/FormProvider";
import { useContext } from "react";

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

test.skip("it should not let user proceed to step 2 without entering a name", async () => {
  const user = userEvent.setup();
  const testUser = new User(); // name = "", income = "", education = ""
  // render(<App />);
  render(<FormContent currentStep={1} userData={testUser} updateUserData />);

  //input name field
  // const inputName = screen.getByTestId("input-name");
  // const inputName = screen.getByRole("textbox", { name: /name/i, "data-testid": "input-name" });
  const inputName = await screen.findByTestId("input-name");
  expect(inputName).toBeInTheDocument();

  // Simulate typing "dan" into the input field
  await userEvent.type(inputName, "dan");

  // Check if the value of the input field is 'dan'
  expect(inputName).toHaveValue("dan");

  // const nextButton = screen.getByTestId("form-step-1-next");
  const nextButton = await screen.findByTestId("form-step-1-next");
  expect(nextButton).toBeInTheDocument();
  console.log("nextButton", nextButton);
  await user.click(nextButton);

  //Check if we can find the title saying "Education Level"
  expect(
    screen.getByRole("heading", {
      name: /education level/i,
    })
  ).toBeInTheDocument();
});

describe("FormContent", () => {
  const userData = { name: "John", income: 50000, education: "" };

  test("renders Step 1 - Education when passed currentStep value of 1", () => {
    render(
      <FormContent
        currentStep={1}
        updateUserData={() => {}}
        userData={userData}
        confirmForm={() => {}}
        backToPreviousStep={() => {}}
        submitAnotherForm={() => {}}
      />
    );

    // Assert that step 1 elements are rendered
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  test("renders Step 2 - Education when passed currentStep value of 2", () => {
    render(
      <FormContent
        currentStep={2}
        updateUserData={() => {}}
        userData={userData}
        confirmForm={() => {}}
        backToPreviousStep={() => {}}
        submitAnotherForm={() => {}}
      />
    );

    // Assert that step 2 elements are rendered
    expect(screen.getByLabelText("Education Level")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  // Add more tests for other steps if needed
});
