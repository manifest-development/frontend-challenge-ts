const isNameInputValid = (value: string): boolean => {
  // If the value is empty, consider it valid to allow the user to delete the entire input
  if (value === "") return true;

  const isInputLettersSpacesPeriod: boolean = /^[A-Za-z. ]+$/.test(value);

  if (isInputLettersSpacesPeriod) return true;

  return false;
};

export default isNameInputValid;
