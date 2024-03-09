const isNameInputValid = (value: string): boolean => {
  const isInputLettersSpacesPeriod: boolean = /^[A-Za-z. ]+$/.test(value);

  if (isInputLettersSpacesPeriod) return true;

  return false;
};

export default isNameInputValid;
