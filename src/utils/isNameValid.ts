// Checks that the user key stroke is valid for the name input - Valid input is letters, spaces, and periods
const isNameValid = (value: string): boolean => {
  // Allows the user to delete the entire input
  if (value === "") return true;

  const isInputLettersSpacesPeriod: boolean = /^[A-Za-z. ]+$/.test(value);

  return isInputLettersSpacesPeriod;
};

export default isNameValid;
