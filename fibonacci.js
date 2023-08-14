// 1st Method

const fib = function(num){
    let arr = [0,1];
    for (let i = 2; i <= num; i++) {
        arr.push(arr[i-1]+arr[i-2]);        
    }
    return arr[num];

}
const output = fib(6);
console.log(output);

// 2nd Method

const fib2 = function(num){
    return num<2 ? num : fib2(num-1)+fib2(num-2);
}
const output2 = fib2(6);
console.log(output2);