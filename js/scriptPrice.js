/* 
	Filename: script.js
*/

function submitInfo(e) {
	var name = document.getElementById("nameinput");
	var email = document.getElementById("emailinput");
	var phone = document.getElementById("phoneinput");
	(name.value && email.value && phone.value) ? alert("Thank you!") : alert("Please fill in all fields");
	(name.value && email.value && phone.value) ? calcTotal() : e.preventDefault();
}

function calcTotal() {
	//Declare and initialize all variables
	var itemTotal = 0;
	var orderTotal = 0;
	var salesTaxRate = 0.07;
	var item1 = document.getElementById("item1");
	var item2 = document.getElementById("item2");
	var item3 = document.getElementById("item3");
	var item4 = document.getElementById("item4");
	var item5 = document.getElementById("item5");
	
	//Is item checked? Add cost to item total. Not checked? Add 0 to item total.
	(item1.checked) ? (itemTotal += 12) : (itemTotal += 0);
	(item2.checked) ? (itemTotal += 24) : (itemTotal += 0);
	(item3.checked) ? (itemTotal += 36) : (itemTotal += 0);
	(item4.checked) ? (itemTotal += 66) : (itemTotal += 0);
	(item5.checked) ? (itemTotal += 110) : (itemTotal += 0);
	(item6.checked) ? (itemTotal += 162) : (itemTotal += 0);
	(item7.checked) ? (itemTotal += 192) : (itemTotal += 0);
	(item8.checked) ? (itemTotal += 40) : (itemTotal += 0);
	(item9.checked) ? (itemTotal += 425) : (itemTotal += 0);
	(item10.checked) ? (itemTotal += 550) : (itemTotal += 0);
	(item11.checked) ? (itemTotal += 675) : (itemTotal += 0);
	(item12.checked) ? (itemTotal += 75) : (itemTotal += 0);
	(item13.checked) ? (itemTotal += 25) : (itemTotal += 0);
	(item14.checked) ? (itemTotal += 25) : (itemTotal += 0);
	(item15.checked) ? (itemTotal += 25) : (itemTotal += 0);
	(item16.checked) ? (itemTotal += 25) : (itemTotal += 0);
	(item17.checked) ? (itemTotal += 125) : (itemTotal += 0);
	itemTotal *= 100;
	var orderTotal = (itemTotal + (itemTotal * salesTaxRate)) / 100;
	
	alert("$" + orderTotal);
	//document.getElementById("orderTotal").innerHTML = "Your order total is <span class='price'>$" + orderTotal + ".00</span>";
}
