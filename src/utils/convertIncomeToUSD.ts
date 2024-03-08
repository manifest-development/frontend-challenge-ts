const convertIncomeToUSD = (income: number): string => {
  return income.toLocaleString("en-US", { style: "currency", currency: "USD" });
};

export default convertIncomeToUSD;
