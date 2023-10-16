function checkNumber(num) {
    if (num > 0) {
        return "Postive";
    } else if (num < 0) {
        return "Negative";
    } else {
  return "Zero";
    }
}
module.exports = checkNumber;
