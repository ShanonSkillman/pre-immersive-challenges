module.exports = function checkAscOrder(numArray) {
//  var daSecondOne = '=' + numArray + '=';
var boo = true;
for (var i = 0; i < numArray.length; i++){
  if(numArray[i] < numArray[i+1]){
       boo = true;
    }else{
       return false;
    }
    // if (numArray[i+1] > numArray[i])
return boo;
  }
}