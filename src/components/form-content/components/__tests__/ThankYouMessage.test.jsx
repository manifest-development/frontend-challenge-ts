import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThankYouMessage from "../ThankYouMessage";
import "@testing-library/jest-dom";
import { mockSubmitAnotherForm } from "../../../../mocks/FormProviderMocks";

describe("ThankYouMessage Component", () => {
  it("should display 'Bart' as the name", () => {
    render(<ThankYouMessage name="Bart" submitAnotherForm={jest.fn()} />);

    const nameText = screen.getByText(/bart/i);

    expect(nameText).toBeInTheDocument();
  });

  //it should call submitAnotherForm when the button is clicked & 1 time
  it("should invoke submitAnotherForm when the 'submit another' button is clicked", async () => {
    const user = userEvent.setup();
    render(<ThankYouMessage name="Bart" submitAnotherForm={mockSubmitAnotherForm} />);

    const submitAnotherButton = screen.getByRole("button", { name: /submit another/i });
    expect(submitAnotherButton).toBeInTheDocument();

    await user.click(submitAnotherButton);
    expect(mockSubmitAnotherForm).toHaveBeenCalledTimes(1);
  });
});
