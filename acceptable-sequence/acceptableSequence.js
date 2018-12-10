module.exports = function acceptableSequence(str) {
var okToGo = '=' + str + '=';

for (var i = 0; i < str.length; i++) {
  // console.log(str);
  // console.log(str[i]);
  if(str[i].match(/[a-z]/i) !== null) {
    // if the character in str is not null
    if(str[i-1] !== '+' || str[i+1] !== '+') {
      // check if symbols are surrounding the letter 
      return false;
      }
    }
  }
  return true;
}

