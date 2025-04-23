const obj = document.getElementById('obj');

const person = {
    name:"SoumyaRg",
    age:22
}

let object = "";

for(let x in person) {
    object += person[x] + " ";
}

obj.innerHTML = object;