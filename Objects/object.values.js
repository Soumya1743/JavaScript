const object = document.getElementById('object_values');

const me = {name:"Soumya Rg", place:"Hydearbad"};
const array = Object.values(me);

object.innerHTML = array;