const nested_objects = document.getElementById('nested_objects');
const person = {
    name: "SoumyaRg",
    age: 22,
    interests: {
        special: "Web Developement",
        game: "Chess"
    }
}

const p1 = "interests";
const p2 = "special";
const p3 = "game";

nested_objects.innerHTML = "My name is " + person.name + ", my age is " + person.age + " and my interests are " + person[p1][p2] + " & playing " + person[p1][p3];