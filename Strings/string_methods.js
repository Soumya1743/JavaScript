let str1 = `This is a String`;
let str2 = "My name is \"SOUMYA\" !"
let str3 = 'It\'s me';
let str4 = "This is \\ Backslash";

document.getElementById('length').innerHTML = str1.length;
document.getElementById('name').innerHTML = str2;
document.getElementById('me').innerHTML = str3;
document.getElementById('backslash').innerHTML = str4;


let text = "My name is Soumya";
console.log(text.charAt(3));
console.log(text.charCodeAt(4));
console.log(text.at(3));
console.log(text[3]);


let str5 = "I am looking";
let slice = str5.slice(2,4);
console.log(slice);
let substring = str5.substring(-2, 10);
console.log(substring);
console.log(str5.toUpperCase());
console.log(str5.toLowerCase());


let str6 = "Hello!";
let str7 = "My name is Soumya.";
let concat = str6.concat(" " + str7);
console.log(concat);


let str8 = "   Hello!       "
console.log(str8.trim());
console.log(str8.trimStart());
console.log(str8.trimEnd());


let str9 = "6";
console.log(str9.padStart(6, "9"));
console.log(str9.padEnd(6,"9"));


let str10 = 6;
let num = str9.toString();
console.log(num.padStart(6, "9"));
console.log(num.padEnd(6,"9"));


let str11 = "Hello! Hello! ";
console.log(str11.repeat(2));
console.log(str11.replace(/Hello!/g, "Hi!"));
console.log(str11.replace(/HELLO!/i, "Hi"));


let str12 = "1, 2, 3, 4, 5, 6";
let myArray = str12.split(",");
console.log(myArray);
document.getElementById('array').innerHTML = myArray;