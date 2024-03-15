function countNumberOfNinesInNumber(number) {
  let count = 0;
  let numberToString = String(number);
  for (let i = 0; i < numberToString.length; i++) {
    const digit = numberToString[i];
    console.log(`Digit to check ${digit}`);
    if ("9" === digit) {
      count++;
    }
  }

  return count;
}
let numberToCheck = 999.5239;
console.log(
  `Number of 9's in ${numberToCheck} is ${countNumberOfNinesInNumber(
    numberToCheck
  )}`
);
