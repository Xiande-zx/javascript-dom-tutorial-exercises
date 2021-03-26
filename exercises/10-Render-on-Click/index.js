let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var elem = document.createElement("div");
elem.innerHTML = "Hello World";
document.body.appendChild(elem);


});
