function isAnagram(str1, str2) {
  if(str1.length !== str2.length){
    return false;
  }
  let count = {};

  for(let char of str1){
    count[char] = (count[char] || 0) + 1;
  }
  console.log(count);
  
  for(let items of str2){
    if(!count[items]){
        return false;
    }
    count[items]--;
  }
  return true;
}

const output = isAnagram("hello", "llheo");
console.log(output);

// 2nd Method

const isAnagram2 = function(s, t){

  return s.split("").sort().join("") === t.split("").sort().join("");
  
}

const output2 = isAnagram2("anagram", "nagaram");
console.log(output2);