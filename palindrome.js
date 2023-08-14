const isPalindrome = (num)=>{
    console.log("hey! there")

    // const num1 = +num.toString().split("").reverse().join('');
    // console.log(num1);
    return num<0 ? false : num === +num.toString().split("").reverse().join("");
}

const output = isPalindrome(123454321);
console.log(output);