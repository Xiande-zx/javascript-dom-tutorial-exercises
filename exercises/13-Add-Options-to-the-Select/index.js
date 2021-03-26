window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

  // your code here
  for(var i = 0; i < countries.length ; i++){
	  var elem = document.createElement("option");
		elem.innerHTML = countries[i];
		document.querySelector('#mySelect').appendChild(elem);
  }

  let change = document.getElementById("mySelect");

  change.addEventListener("change", function() {
	  var str = change.options[change.selectedIndex].text;
	  alert(str)
});
  
};
