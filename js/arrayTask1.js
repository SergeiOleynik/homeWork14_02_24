const wordsArray = ["apple", "banana", "orange", "kiwi", "grape"],
      n = 5;
let   newArray = [];

for(const arr of wordsArray){
  if(arr.slice("").length>n) newArray.push(arr); 
}
console.log(newArray);




