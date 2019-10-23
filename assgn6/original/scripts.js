
var glaze = [["None", "no-glaze.jpg"], ["Sugar-Milk", "sugar-milk.jpg"], ["Vanilla-Milk", "vanilla-milk.jpg"], ["Double Chocolate", "double-chocolate.jpg"]]
class Bun {
	constructor(glaze, quantity, price){
		this.glaze;
		this.quantity;
		this.price;
	}
}

var itemsForCheckout = [];
var select = document.getElementById("glaze");
var quant = document.getElementById("quant");


// select.onchange = function(){
// 	var glazeChoice = select.options[select.selectedIndex].text;

// 	 populate(glazeChoice);
// }

// quant.onchange = function(){
// 	var changeQuant = quant.options[quant.selectedIndex].text;

// 	 updatePrice(changeQuant);
// }

var cart = document.getElementById("cart-button");

cart.onclick = function(){
	var glazeChoice = select.options[select.selectedIndex].text;
	var quantity = quant.options[quant.selectedIndex].text;
	itemsForCheckout.push(Bun(glazeChoice, quantity, price));
}

function populateCart(itemsForCheckout){
	var cartInfo = document.getElementById("cartInfo");
	for (i = 0; i < itemsForCheckout.length; i++){
		var R = document.createElement("tr");
		for(j = 0; i < itemsForCheckout[i].length; i++){
			var C = document.createElement("td");
			C.innherHTML = itemsForCheckout[i][j];
			R.appendChild(C);
		}
	}
}
// function updatePrice(changeQuant){
// 	var price = document.getElementById("price");
// 		for(i = 0)
// }

// function populate(glazeChoice){
// 	var flavorImage = document.getElementById("flavor");
// 	for (i = 0; i < glaze.length; i++){
// 		if (glaze[i][0] === glazeChoice){
// 			flavorImage.src = glaze[i][1]; 
// 		}
// 	} 
// }