let str = `This is a String`;

document.getElementById('template').innerHTML = str;

let fname = "Soumya";
let lname = "RG";
let string = `Welcome! ${fname} ${lname}`;
document.getElementById('myname').innerHTML = string;



let string1 = "1 2 3 4 5 6";
for (let i of string1) {
    document.getElementById('display').innerHTML += i;
    let a = `i`;
}