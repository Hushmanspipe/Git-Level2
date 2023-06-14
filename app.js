// console.error("This is an error");
// console.warn("This is a warning");
// const name = 'John'
// const age = 30

// console.log(  'My name is' + ' ' + name+ ' ' + 'i am ' + age + ' ' + 'years old ');


// console.log(`My name is ${name} and i am ${age}`);

// const s = 'technology, It, Computer, Code'

// console.log(s.substring(0, 5 ).toLocaleUpperCase());
// console.log(s.split(', '));
 
//Array Methods
// const number = new Array(1,2,3,4,5,6)
// const fruits = ['Apples', 'Mangoes' , 'Peaches' , 10, true]
// console.log(number);
// fruits[3] = 'grapes'
// fruits.push('salami')
// fruits.unshift('sour bears')
// fruits.pop()
// console.log(fruits);
// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf('Peaches'));

//Object Literals

// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 30,
//     hobbies:['music','movies', 'sports'],

//     address: {
//         street:'50 main str',
//         city: 'Boston',
//         state: 'MA'
//     }

// }
//  console.log(person.firstname, person.lastname);
//  console.log(person.hobbies[1]);
//  console.log(person.address. city);
//  const { firstname, lastname, address: {city}} = person
//  console.log(firstname);
//  console.log(city);

//  person.email =  'john.email.com'
//  console.log(person);

// const todos = [
//     {
//         id:1,
//         text:"Take out trash",
//         isCompleted: true
//     },

//     {
//         id:2,
//         text:"Meeting with Boss",
//         isCompleted: true
//     },

//     {
//         id:3,
//         text:"Dentist Appointment",
//         isCompleted: false
//     },
// ]

// console.log(todos); 
// console.log(todos[2].text);

// const todoJSON = JSON.stringify(todos)
// console.log(todoJSON);

//Loops
// For loop

// for (let i = 0; i <= 10; i++) {
// console.log(`"For loop number ${i}"`);    
// }

// While loop

// let i = 0
// while (i < 10) {
//     console.log(`"While loop number ${i}`);
//     i++;
// }

//  for (let i = 0; i < todos.length; i++) {
//      console.log(todos[i].text);
    
//  }

// //for of loop

// for( let index of todos) {
//      console.log(index.text);
// }

// fro each, map, filter

// todos.forEach( function(todo)  {
// console.log(todo.id);
// })

// //MAP

// const todoText = todos.map( function (todo)  {
//         return todo.text
//     })

//     console.log(todoText);


//FILTER

// const todoCompleted = todos.filter( function (todo)  {
//     return todo.isCompleted == true
// }).map(function(todo){
//     return todo.text
// })

// console.log(todoCompleted);

// const x = 6;
// const y = 11;

// - || denotes or (to check if atleast 1 is true)
// - && denotes and ( to check if both statements are true)


// else if ( x > 10) {
//     console.log('x is greater than 10');
// } else{
//     console.log('x  is NOT 10');
// }  


// const x  = 10

// const color = x > 10 ? 'red' :  'blue'
// console.log(color);

// switch (color){
//     case 'red':
//     console.log('color is red');
//     break;
//     case 'blue':
//     console.log('color is blue');
//     break
//     default:
//     console.log('color is NOT red or blue');


// }

// const addNums = ( num1=1 , num2=1) => {
//   return num1 + num2;
// }
// console.log(addNums(5,5))

// const flogNums = ( num1=1 , num2=1) => 
//     (num1 + num2);
    
//     console.log(flogNums(5,10));

//Constructor function
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date (dob)
    
// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear()
// }
// Person.prototype.getFullName =  function(){
//     return `${this.firstName} ${this.lastName}`
    
// }

// JS Class
    class Person {
        constructor(firstName, lastName, dob) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.dob = new Date (dob) 
        }

        getBirthYear(){
    return this.dob.getFullYear()

        }

        getFullName(){
    return `${this.firstName} ${this.lastName}`

        }
    }

//Instantiate object
const person1 = new Person('JOhn', 'Doe', '4-3-1980')
const person2 = new Person('Martha', 'smith', '7-6-2000')
console.log(person1); 
console.log(person2); 







