function countCharOccurrences(str, char) {
  let numberOfOccurrence = 0;

  for (let i = 0; 1 < str.length; i++) {
    if (char == str[i]) {
      numberOfOccurrence++;
    }
  }
  return numberOfOccurrence;
}
module.exports = countCharOccurrences;
