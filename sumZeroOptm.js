const arr = [-5, -4, -3, -2, -1, 0, 1, 4, 6];

const getPairZero = (arr) =>{
    let left = 0; 
    let right = arr.length - 1;

    while(left < right){
        sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        }
        else if(sum < 0){
            left++;
        }
        else{
            right--;
        }

    }
}

const output = getPairZero(arr);
console.log(output);