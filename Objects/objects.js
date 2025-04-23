const objects = document.getElementById('objects');
const object2 = document.getElementById('object2');
const empty = document.getElementById('empty');
const del = document.getElementById('delete');


// Creating an Object
const person = { firstName: 'Soumya', lastName: 'Rg', age: 22, eyeColor: 'Black' };
objects.innerHTML = person.firstName + person.lastName + " is " + person.age + " years old and " + person.firstName + "'s eye color is " + person.eyeColor;


// We can also call the objects properties in this way
object2.innerHTML = person["firstName"] + person["lastName"] + " is " + person["age"] + " years old and " + person["firstName"] + "'s eye color is " + person["eyeColor"];


// Create an empty object and then add values to it
const person2 = {};
person2.firstName = 'Soumya';
person2.lastName = 'Rg';
person2.age = 22;
person2.eyeColor = 'Black';
person2.fullName = person2.firstName + person2.lastName;
empty.innerHTML = person2.firstName + person2.lastName + " is " + person2.age + " years old and " + person2.firstName + " eye color is " + person2.eyeColor + " and full name is " + person2.fullName;


// We can copy an object
const x = person;
x.age = 10;

// We can copy a single property of an object
// const y = age;

// We can also delete a property form an object
delete person2.age;
del.innerHTML = person2.firstName + person2.lastName + " is " + person2.age + " years old and " + person2.firstName + " eye color is " + person2.eyeColor + " and full name is " + person2.fullName;

