const wordsArray = ["apple", "banana", "orange", "kiwi", "grape"],
      n = 5;
let   newArray = [];
 
alert("Масиви, завдання 1 :");
alert(`є масив слів та число 5 - ${wordsArray}`);

for(const arr of wordsArray){
  if(arr.slice("").length>n) newArray.push(arr); 
}

alert(`масив, що містить лише ті слова, які мають довжину більше 5 - ${newArray}`);




