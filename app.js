let firstName = "Hafeeza"; // #1 first variable that will console.log by name when called

const States = 50; //#2 constant

let val1 = 5; //when called this will add these 2 values
let val2 = 4;
let a = val1 + val2;

function sayHello() {
  alert("Hello World!"); //will create an Hello World! alert box
}

sayHello();

//Number 12
let people = [
  { name: "Charles", age: 21 }, //0
  { name: "Abby", age: 27 },
  { name: "James", age: 18 },
  { name: "John", age: 17 }, //3
];

function checkAge() {
  for (i = 0; i < people.length; i++) {
    if (people[i].age < 21) {
      console.log(
        "sorry " + people[i].name + ", you aren't old enough to view this page!"
      );
    } else {
      console.log(people[i].name + ", you may enter!");
    }
}
}

checkAge(people);


//checkAge function with no predefined array -#9 
function checkAge2(name, age){
    if (age < 21) {
  console.log(
    "Sorry " + name + ", you aren't old enough to view this page!"
  );
} else {
  console.log(name + ", you may enter!");
}
}
checkAge2("Charles", 21)
checkAge2("Abby", 27);
checkAge2("James", 18);
checkAge2("John", 17);

// for (let i=0; i<=4; ++i) {

//     console.log(i);
// }

let veggies = ["peas", "squash", "cucumbers"];

for (let i = 0; i < veggies.length; i++) {
  console.log(veggies[i]);
}

//Number  11. Pet Name
let pet= {
    name: 'Braylon',
    breed: 'Pekingnese'
}
console.log(pet.name, pet.breed); 

// number 12. nameAge function
let folks= [
    {name: 'Alice',
     age: 35     
},
{ 
    name: 'Brandon',
    age: 17
},
{
    name: 'Cassandra',
    age: 25
},
{
    name: 'Deborah',
    age: 50
},
{
    name: 'Elaine',
    age: 18
},
]
function nameAge() {
    for (i = 0; i < folks.length; i++) {
      if (folks[i].age < 21) {
        console.log(
          "Sorry " + folks[i].name + ", you aren't old enough to view this page!"
        );
      } else {
        console.log(folks[i].name + ", you may enter!");
      }
  }
  }
  nameAge(); 

  //number 14 hello world getLength 

  function sayHello() {
    alert("Hello World!"); //will create an Hello World! alert box
  }
  
  sayHello();

  function getLength (word){
      console.log(word.length)
  }
  let words = getLength('Hello World'); 
  function evenOrOdd(){

    //mod (%) refers to the remainder after dividing something
    // % 2 == 0 means something is even, % 1 == 0 is odd
      if (words % 2 == 0){
        console.log('The world is nice and even!')
      } else {
          console.log('The world is an odd place')
      }
  }

  evenOrOdd()