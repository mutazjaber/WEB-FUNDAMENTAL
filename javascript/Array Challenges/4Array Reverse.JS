var newArr = [] ;
function reverse(arr) {
    for (var i =0 ; i< arr.length/2    ; i++){
        newArr [i] = arr [i];
        arr[i]= arr[(arr.length - 1 - i)] ;
        arr[(arr.length - 1 - i)]= newArr[i];
        }
            return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"] 
