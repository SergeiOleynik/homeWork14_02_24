
function slugify(someString){
  return  someString.split(" ").join("-");
}

alert("Функції, завдання 2 :");

alert(slugify('Top 10 benefits of React framework'));
alert(slugify('Azure Static Web Apps are Awesome'));
alert(slugify('Technical writing tips for non-native English speakers'));   
