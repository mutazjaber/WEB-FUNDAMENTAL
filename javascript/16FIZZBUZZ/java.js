var sequence = 3;
var arr = [0,1];
var sum_2 = 1 ;
function fibonacci (sequence){
    for ( var i= 0 ; i <= sequence ; i++){
        sum_2 += i;
        arr.push(sum_2)
    }
}
