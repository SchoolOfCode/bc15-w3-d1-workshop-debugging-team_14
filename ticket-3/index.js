let count = 0;

function countNumberOfNinesInNumber(number) {

const num = String(number)
.split('')
.map(Number);

  for (let i = 0; i < num.length; i++) {
    const digit = num[i];
    if (digit === 9) {
      count++;
    }
  }

  return count;
}

// let number1 = 23
console.log(countNumberOfNinesInNumber(111.245));
// console.log(number1[1]);