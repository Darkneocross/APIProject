//printSubmittedText();

function printSubmittedText() {
	var order = document.getElementById("firstName").value;
	var orderTwo = document.getElementById("lastName").value;
	var orderThree = order + " " + orderTwo;
	document.getElementById("orderThree") = orderThree;
	//document.write(orderThree);// = orderThree;
}