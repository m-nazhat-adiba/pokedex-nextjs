export const formatNumber = (number) => {
  // Convert the number to a string
  let numberString = number.toString();

  // If the number has less than 4 digits, pad it with leading zeros
  while (numberString.length < 4) {
    numberString = "0" + numberString;
  }

  return numberString;
};
