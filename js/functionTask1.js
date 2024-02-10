
const nameStudents = ["John", "Jane", "Mike", "Anna"],      
      gradesStudentsJohn = [ 90, 87, 93, 88 ],
      gradesStudentsJane = [ 78, 82, 80, 85 ],
      gradesStudentsMike = [ 92, 89, 85, 78 ],
      gradesStudentsAnna = [ 75, 80, 92, 87 ];

alert("Функції, завдання 1 :");

function students(averageStudent,nameStudent,position){
    let len = averageStudent.length, j = 0, 
        k = 0, i;

    for(i=0;i<len;i++) k += (averageStudent[i])/len; 
     j = nameStudent[position];    
    alert(`студент ${j}, має середній бал ${k}`);       
}

let position = 0;
students(gradesStudentsJohn,nameStudents,position);

position++;
students(gradesStudentsJane,nameStudents,position);

position++;
students(gradesStudentsMike,nameStudents,position);

position++;
students(gradesStudentsAnna,nameStudents,position);



