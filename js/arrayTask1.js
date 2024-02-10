const wordsArray = ["apple", "banana", "orange", "kiwi", "grape"],
      n = 5;
let   newArray = [];

alert("Масив, завдання № 1");
alert(`масив до перетворення : ${wordsArray}`);

for(const arr of wordsArray){
  if(arr.slice("").length>n) newArray.push(arr);
} 

alert(`масив, що містить лише ті слова, які мають довжину більше 5 : ${newArray}`);



