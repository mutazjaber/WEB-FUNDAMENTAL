// /**
//  * @param {number} x
//  * @return {boolean}
//  */
var isPalindrome = function(x) {
    let num = x.toString();
    var j = num.length -1 ;
    var y = "" ;
    while (j >= 0) {
        y += num[j];
        j--;
    }
    console.log(num)
    if (y == x) {
        return true ;
    }
    else {
        return false;
    }  
};
// isPalindrome(-121);
console.log(isPalindrome(-121));