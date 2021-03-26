// Your code here
const add = document.getElementById('addToDo');
const ul = document.querySelector('ul')

add.addEventListener("keyup", function(event) {

    if (event.key === 13) {
      event.preventDefault();
      var data = add.value
      
      var elem = document.createElement("li");
      elem.innerHTML = "Hello World";
      document.querySelector('#myList').appendChild(elem);
    }
  });