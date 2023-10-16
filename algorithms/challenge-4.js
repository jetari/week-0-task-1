function findSmallest(num1, num2, num3) {
  if ((num2 && num3) > num1) {
    return num1;
  } else if ((num1 && num3) > num2) {
    return num2;
  } else {
    return num3;
  }
}
// console.log(findSmallest(2,5,8));
module.exports = findSmallest;
