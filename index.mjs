// import startApp from './app.mjs';
// document.addEventListener('DOMContentLoaded', startApp);


// ======= Students' Data =======
const BackEndStudents = [
    {name: 'Grace Eze', age: 22, sex: 'female'},
    {name: 'George Lawal ', age: 24, sex: 'male'},
    {name: 'Paul Ayoola', age: 26, sex: 'male'},
    {name: 'Rhoda Oluwasuen', age: 20, sex: 'female'},
    {name: 'George Enwere', age: 19, sex: 'male'},
    {name: 'Victor Bassey', age: 21, sex: 'male'},
    {name: 'Hassan Usman', age: 24, sex: 'male'},
    {name: 'Aishat Bada', age: 18, sex: 'female'},
    {name: 'Tayo Emma', age: 26, sex: 'male'},
    {name: 'Titi Bode', age: 17, sex: 'female'},
    {name: 'Kiki Abdullahi', age: 22, sex: 'female'},
    {name: 'Tobi Saheed', age: 23, sex: 'female'},
    {name: 'Mustapha George', age: 20, sex: 'male'},
    {name: 'Setemi John', age: 22, sex: 'male'},
    {name: 'Timi Chucks', age: 24, sex: 'male'},
    {name: 'Precious Iyin', age: 22, sex: 'female'},
    {name: 'Ebun Samuel', age: 21, sex: 'female'},
    {name: 'Rasheed Yusuf', age: 20, sex: 'male'},
  ]
  const CloudStudents = [
    {name: 'Grace Hanson', age: 20, sex: 'female'},
    {name: 'Chidinma Owugburu', age: 22, sex: 'female'},
    {name: 'Paul Monday', age: 27, sex: 'male'},
    {name: 'Oluwasuen Famous', age: 19, sex: 'male'},
    {name: 'Georgina Enwere', age: 26, sex: 'female'},
    {name: 'Victor Ozioma', age: 21, sex: 'male'},
    {name: 'Usman Mohammed', age: 22, sex: 'male'},
    {name: 'Aishat Bada', age: 22, sex: 'female'},
    {name: 'Grace George', age: 22, sex: 'female'},
    {name: 'Christian Justice', age: 22, sex: 'male'},
    {name: 'Eze Obi', age: 22, sex: 'male'},
    {name: 'Bella Augustin', age: 26, sex: 'female'},
    {name: 'Linda Obi', age: 22, sex: 'female'},
    {name: 'Simon peter', age: 25, sex: 'male'},
    {name: 'Merit Balogun', age: 24, sex: 'female'},
    {name: 'John Femi', age: 23, sex: 'male'},
    {name: 'Eze Grace', age: 20, sex: 'female'},
    {name: 'Christabel Eboka', age: 23, sex: 'female'}
    
   
  ]
  const FrontEndStudents = [
    {name: 'Sazu Peter', age: 24, sex: 'male'},
    {name: 'Paula Owugburu', age: 22, sex: 'female'},
    {name: 'Paul Judah', age: 27, sex: 'male'},
    {name: 'Oluwaseun Ben', age: 19, sex: 'male'},
    {name: 'Latifah Enwere', age: 25, sex: 'female'},
    {name: 'Praise Ozioma', age: 23, sex: 'male'},
    {name: 'Usman Henshaw', age: 23, sex: 'male'},
    {name: 'Aishat Alade', age: 23, sex: 'female'},
    {name: 'Grace Olowo', age: 21, sex: 'female'},
    {name: 'Juliana Justice', age: 20, sex: 'female'},
    {name: 'Eze Jude', age: 24, sex: 'male'},
    {name: 'Bella Titus', age: 21, sex: 'female'},
    {name: 'Faustina Obi', age: 22, sex: 'female'},
    {name: 'Andrew Peter', age: 27, sex: 'male'},
    {name: 'Ahmed Balogun', age: 21, sex: 'male'},
    {name: 'John Akanji', age: 26, sex: 'male'},
    {name: 'Grace Toni', age: 20, sex: 'female'},
    {name: 'Mabel Siyaka', age: 22, sex: 'female'}
   
  ]
  
  // ======== Instructors' Data ======
const Instructors = [
{name: 'Johnson Badmus', sex: 'male', courses: ['FrontEnd', 'BackEnd']},
{name: 'Tunde Soyinka', sex: 'male', courses: ['BackEnd', 'Cloud']},
{name: 'Temi Solade', sex: 'female', courses: ['BackEnd']},
{name: 'Rhoda Mabis', sex: 'female', courses: ['FrontEnd']},
{name: 'Ahmed Gbenga', sex: 'male', courses: ['FrontEnd', 'BackEnd']},
{name: 'Chidi Bassey', sex: 'male', courses: ['FrontEnd', 'BackEnd']},
{name: 'Shade Usman', sex: 'female', courses: ['FrontEnd', 'BackEnd']},
{name: 'Aishat Adetutu', sex: 'female', courses: ['BackEnd']},
{name: 'Seun Tade', sex: 'male', courses: ['Cloud']},
{name: 'Shiji Akintayo', sex: 'male', courses: ['BlackEnd', 'Cloud']}
]

const names = []

const hiddenContent = document.querySelectorAll('.hidden')
console.log(hiddenContent);

// About School Info
const aboutSchool = document.querySelector('.aboutSchool')


function myFunction(table, studentData, tableHeaderText) {
  
  
    // Table to be displayed
    
    var tableToDisplay = document.getElementById(table);
    var tableOwner = document.querySelector('.table-owner')
    var infos = document.querySelector('.infos')


    // 

    if(tableToDisplay.classList.contains('hidden')){
      infos.classList.remove('hidden')
      tableToDisplay.classList.remove('hidden')
      tableOwner.innerText = tableHeaderText
      aboutSchool.classList.add('hidden')
    }
    else{
      tableToDisplay.classList.add('hidden')
      tableOwner.innerText = ''
      aboutSchool.classList.remove('hidden')
    }
    
    // Inserting names inside the table
    for(let i = 0; i < studentData.length; i++){
        names.push(studentData[i].name)
        if(i%2 == 1 && names.length <= studentData.length){
            var row = tableToDisplay.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerText = studentData[i-1].name;
            cell2.innerText = studentData[i].name;
        }
    }   
}