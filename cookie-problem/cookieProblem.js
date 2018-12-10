module.exports = function cookieProblem(array) {
 console.log(cookieProblem)
 var maxCookie = Math.max(...array)
 var extraCookies = 0
 for(var i = 0; i<array.length; i++){
   extraCookies = extraCookies + (maxCookie - array[i])
 }
 return extraCookies
}


//find out how many cookies each person has
//add cookies to each person to equal amounts 
//find person with most cookies
//return total amount of cookies given out