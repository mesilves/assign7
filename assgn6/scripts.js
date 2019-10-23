
var glaze = [["None", "no-glaze.jpg"], ["Sugar-Milk", "sugar-milk.jpg"], ["Vanilla-Milk", "vanilla-milk.jpg"], ["Double Chocolate", "double-chocolate.jpg"]]
class Bun {
	constructor(glaze, quantity){
		this.glaze;
		this.quantity;
	}
}

//variables declared

var itemsForCheckout = [];
var select = document.getElementById("glaze");
var text = document.getElementById("glaze-text");
var quant = document.getElementById("quant");
var glazeChoice;
var quantity;
var itemsInCart = 0;

//update image on screen when you select different glazes

if(select != null){
	select.onchange = function(){
	glazeChoice = select.options[select.selectedIndex].text;

	 populate(glazeChoice);

	}
}

function populate(glazeChoice){
	var flavorImage = document.getElementById("flavor");
	for (i = 0; i < glaze.length; i++){
		if (glaze[i][0] === glazeChoice){
			flavorImage.src = glaze[i][1];
			if(glazeChoice === "None"){
				text.innerText = "no";
			} else{
				text.innerText = "a " + glaze[i][0]; 
			}

		}
	} 
}

// quant.onchange = function(){
// 	var changeQuant = quant.options[quant.selectedIndex].text;

// 	 updatePrice(changeQuant);
// }

//updates number of items represented in cart after hitting add to cart button

var addToCart = document.getElementById("cart-button");

if(addToCart != null){
	addToCart.onclick = function(){
		glazeChoice = select.options[select.selectedIndex].text;
		quantity = quant.options[quant.selectedIndex].text;
		updateCart(quantity);
		console.log(glazeChoice, quantity);
		localStorage.setItem("newBun", JSON.stringify(new Bun(glazeChoice, quantity)));

	}
}

function updateCart(quantity){
	var cart = document.getElementById("shoppingCart");
	if (isNaN(quantity) == false){
		itemsInCart += parseInt(quantity);
		cart.innerHTML = "<span> Cart (" + itemsInCart + ") </span>";
	}
}

//work in progress for assignment 6B

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

