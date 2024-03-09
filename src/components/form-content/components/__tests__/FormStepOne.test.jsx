import { render, fireEvent, screen } from "@testing-library/react";
import FormStepOne from "../FormStepOne";

describe("FormStepOne Component", () => {
  const mockSubmitForm = jest.fn();
  const mockUpdateField = jest.fn();
  const localData = { name: "Bart Swierz", income: 40000, Education: "Bachelor's Degree" };

  it("updates the fields when they are changed", () => {
    // const { getByLabelText } = render(<FormStepOne {...props} />);

    const { getByLabelText } = render(<FormStepOne localData={localData} submitForm={mockSubmitForm} updateField={mockUpdateField} />);

    fireEvent.change(getByLabelText("Name"), { target: { value: "John Doe" } });
    expect(mockUpdateField).toHaveBeenCalledWith("name", "John Doe");

    const incomeInput = screen.getByRole("textbox", {
      name: /annual income in usd \[input 0 if you are a student\]/i,
    });

    fireEvent.change(incomeInput, { target: { value: 50000 } });

    expect(mockUpdateField).toHaveBeenCalledWith("income", "50000");
    expect(mockUpdateField).toHaveBeenCalledTimes(2);
  });
});
