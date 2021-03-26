let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	var elem = document.createElement("li");
	elem.innerHTML = "Hello World";
	document.querySelector('#myList').appendChild(elem);
});
