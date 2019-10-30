
var glaze = [["None", "no-glaze.jpg"], ["Sugar-Milk", "sugar-milk.jpg"], ["Vanilla-Milk", "vanilla-milk.jpg"], ["Double Chocolate", "double-chocolate.jpg"]]
class Bun {
	constructor(image, roll, glaze, quantity){
		this.image = image;
		this.roll = roll;
		this.glaze = glaze;
		this.quantity = quantity;
		this.price = function(){
			console.log(this.quantity);
			return parseInt(this.quantity) * 3;
		}
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
		let image = undefined; 
		for (i = 0; i < glaze.length; i++){
			if (glazeChoice === glaze[i][0]){
				image = glaze[i][1];
			}
		}
		var kindOfBun = "Original";
		quantity = quant.options[quant.selectedIndex].text;
		updateCart(quantity);
		select.selectedIndex = 0;
		quant.selectedIndex = 0;
		let roll = new Bun(image, kindOfBun, glazeChoice, quantity);
		itemsForCheckout.push(roll);
		//console.log(itemsForCheckout);
		localStorage.setItem("rollsToPurchase", JSON.stringify(itemsForCheckout));
	}
}

function updateCart(quantity){
	var cart = document.getElementById("shoppingCart");
	if (isNaN(quantity) == false){
		itemsInCart += parseInt(quantity);
		cart.innerHTML = "<span> Cart (" + itemsInCart + ") </span>";
	}
}

//populates cart when window loads, generates table of data
window.onload = function(){
	populateCart();
}
var cartData = JSON.parse(localStorage.getItem("rollsToPurchase"));

function populateCart(){
	console.log(cartData);
	var cartDataArray = [];
	//console.log(cartData);
	var removeButton = "<span class='remove' onclick='deleteRow(this)'> Remove </span>";
	for (i = 0; i < cartData.length; i++){
		let cell = [cartData[i].image, cartData[i].roll, cartData[i].glaze, cartData[i].quantity, "$" + parseInt(cartData[i].quantity) * 3.99, removeButton];
		cartDataArray.push(cell);
	}

	//console.log(cartDataArray);
	//console.log(cartData.length);
	var cartInfo = document.getElementById("cartInfo");
	for (i = 0; i < cartDataArray.length; i++){
		var R = document.createElement("tr");
		for(j = 0; j < cartDataArray[i].length; j++){
			var C = document.createElement("td");
			if(j === 0){
				C.innerHTML = "<img src='"+cartDataArray[i][j]+"' width='100px' height='100px'>";	
			} else if(j === cartDataArray[i].length - 1){
				C.innerHTML = cartDataArray[i][j];
			}
			else{
			C.innerText = cartDataArray[i][j];
			}
			R.appendChild(C);
		}
		//console.log(R);
		cartInfo.appendChild(R);
	}
}


//Removes elements from cart and local storage

var remove = document.getElementsByClassName("remove");



function deleteRow(remove) {
    var i = remove.parentNode.parentNode.rowIndex;
    console.log(i);
    removeItem(i);
    document.getElementById("cartInfo").deleteRow(i);
}

function removeItem(i) {
    var updatedCart = cartData.splice(i-1, 1);
    localStorage.setItem("rollsToPurchase", JSON.stringify(cartData));
}
// function updatePrice(changeQuant){
// 	var price = document.getElementById("price");
// 		for(i = 0)
// }

