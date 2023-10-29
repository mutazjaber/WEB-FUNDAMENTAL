var  arr= [0,1] ;
var newi = 0;
function fibonacciArray(n) {
    for (var i =0 ; i< n-2 ; i++){
        newi = arr[i]+arr[i+1];
        arr.push(newi);
    }
    return arr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
