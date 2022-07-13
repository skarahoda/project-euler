const unitsDigit = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tensDigit = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const teensDigit = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

export const getLetterCount = (num: number): number => {
  if (num < 10) {
    return unitsDigit[num].length;
  }
  if (num < 20) {
    return teensDigit[num - 10].length;
  }
  if (num < 100) {
    return tensDigit[Math.floor(num / 10)].length + unitsDigit[num % 10].length;
  }
  if (num < 1000) {
    const hundredsDigitCount = unitsDigit[Math.floor(num / 100)].length + 'hundred'.length;
    if (num % 100 === 0) {
      return hundredsDigitCount;
    }
    return hundredsDigitCount + 'and'.length + getLetterCount(num % 100);
  }
  return getLetterCount(Math.floor(num / 1000)) + 'thousand'.length + getLetterCount(num % 1000);
};

export const sumOfLetterCount = (max:number): number => {
  let sum = 0;
  for (let i = 1; i <= max; i += 1) {
    sum += getLetterCount(i);
  }
  return sum;
};
