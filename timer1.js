let input = process.argv.slice(2);

const timer = function(arr) {
  let arr1 = [];
  let number = 0;
  for (let i = 0; i < arr.length; i++) {
    number = parseInt(arr[i]);
    arr1.push(number);
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > 0) {
      setTimeout(()=>{
        process.stdout.write('\x07');
      },arr1[i] * 1000);
    }
  }
};
timer(input);


