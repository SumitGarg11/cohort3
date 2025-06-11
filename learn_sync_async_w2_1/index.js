function sum(a,b){
    return a+b;
}
var result = sum(1,2);
console.log(result);

function sum2(n){
    let ans = 0;
    for(let i = 1; i<=n; i++){
        ans += i;
    }
    return ans;
}
console.log(sum2(5));
// JS executes code line by line (synchronously).
// Function sum() is called, completes execution, and only then console.log() runs.
