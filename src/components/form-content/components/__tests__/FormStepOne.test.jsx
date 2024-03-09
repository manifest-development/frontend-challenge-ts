import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormStepOne from "../FormStepOne";
import "@testing-library/jest-dom";

describe("FormStepOne Component", () => {
  // const mockLocalData = { name: "", income: 0, education: "" };
  const mockUpdateField = jest.fn((key, value) => {
    mockLocalData[key] = value;
  });
  const mockLocalData = { name: "Bart Swierz", income: 40000, Education: "Bachelor's Degree" };

  it("updates the fields when they are changed", () => {
    // const { getByLabelText } = render(<FormStepOne {...props} />);

    const { getByLabelText } = render(
      <FormStepOne localData={mockLocalData} submitForm={mockSubmitForm} updateField={mockUpdateField} />
    );

    fireEvent.change(getByLabelText("Name"), { target: { value: "John Doe" } });
    expect(mockUpdateField).toHaveBeenCalledWith("name", "John Doe");

    const incomeInput = screen.getByRole("textbox", {
      name: /annual income in usd \[input 0 if you are a student\]/i,
    });

    fireEvent.change(incomeInput, { target: { value: 50000 } });

    expect(mockUpdateField).toHaveBeenCalledWith("income", "50000");
    expect(mockUpdateField).toHaveBeenCalledTimes(2);
  });

  it("should have Next Button disabled when name is empty", () => {
    render(
      <FormStepOne localData={{ name: "", income: 0, education: "" }} submitForm={mockSubmitForm} updateField={mockUpdateField} />
    );

    const nextButton = screen.getByRole("button", { name: /next/i });
    expect(nextButton).toBeDisabled();
  });

  it("should have Next Button enabled when name is filled in", () => {
    render(
      <FormStepOne
        localData={{ name: "John Doe", income: 0, education: "" }}
        submitForm={mockSubmitForm}
        updateField={mockUpdateField}
      />
    );

    const nextButton = screen.getByRole("button", { name: /next/i });
    expect(nextButton).toBeEnabled();
  });

  it("should have Next Button enabled when user fills out the name field", async () => {
    const mockLocalData = { name: "", income: 0, education: "" };
    const mockUpdateField = jest.fn((key, value) => {
      mockLocalData[key] = value;
    });
    const mockSubmitForm = jest.fn();

    render(
      <FormStepOne localData={{ name: "", income: 0, education: "" }} submitForm={mockSubmitForm} updateField={mockUpdateField} />
    );

    // const inputName = screen.getByRole("textbox", { name: /name/i });
    // const inputName = screen.getByRole("textbox", { id: /name/i });
    // const inputName = screen.getByLabelText("Name");
    const inputName = screen.getByTestId("input-name");
    // fireEvent.change(inputName, { target: { value: "John Doe" } });
    // await userEvent.type(inputName, { target: { value: "John Doe" } });
    await userEvent.type(inputName, "John Doe");

    // expect(mockUpdateField).toHaveBeenCalledWith("name", "John Doe");
    // expect(mockUpdateField).toHaveBeenLastCalledWith("name", "John Doe");
    // expect(inputName.value).toBe("John Doe");
    expect(screen.getByDisplayValue("John Doe")).toBeInTheDocument();

    await waitFor(async () => {
      const nextButton = screen.getByRole("button", { name: /next/i });
      expect(nextButton).toBeEnabled();
    });
  });
});
