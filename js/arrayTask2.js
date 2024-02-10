
let arrayA = [1, 2, 3, 11, 1, 4, 5, 5, 7, 8, 9, 6],
    arrayB = [3, 4, 5, 6, 12, 10, 7, 10, 12, 10, 7];

arrayA = arrayA.concat(arrayB);

alert("Масив, завдання № 2");
alert(`масив до перетворення : ${arrayA}`);

for(let i=1, j; i<arrayA.length; i++){
  j = arrayA.indexOf(i); 
  if(j >= 0) arrayB[i-1] = arrayA[j];  
}

alert(`новий масив, де кожен елемент унікальний : ${arrayB}`);




