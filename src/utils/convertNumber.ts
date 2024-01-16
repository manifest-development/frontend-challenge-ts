const convertNumber = (inputValue: string | number): number =>
  typeof inputValue === 'string' ? parseInt(inputValue, 10) : inputValue

export default convertNumber
