// Checks that the user key stroke is valid for the name input - Valid input is numbers 0-9
const isIncomeValid = (value: string): boolean => {
  // Allows the user to delete the entire input
  if (value === "") return true;

  // Check if the value contains only numbers
  const isInputNumbers: boolean = /^[0-9]+$/.test(value);

  return isInputNumbers;
};

export default isIncomeValid;
