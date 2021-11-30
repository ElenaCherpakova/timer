let num = process.argv.slice(2);
let second = Number(num);
console.log(second);
const timer = function(second) {
  if (second === undefined || isNaN(second) || (second <= 0)) {
    return false;
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, second);
  }
};
timer(second);


