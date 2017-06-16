var ChocolateChipCount = ~~Cookies.get('ChocolateChip');
var OatmealCount = ~~Cookies.get('Oatmeal');
var MolassesCount = ~~Cookies.get('Molasses');
document.getElementById("cchip").innerHTML="Chocolate Chip" + " - " + ChocolateChipCount;
document.getElementById("oat").innerHTML="Oatmeal" + " - " + OatmealCount;
document.getElementById("mol").innerHTML="Molasses" + " - " + MolassesCount;

// document.addEventListener("DOMContentLoaded", function(){
// 	document.querySelector("button").addEventListener("submit", function(event){
// 		event.preventDefault();
// 		console.log( document.querySelector("").value );

function getChocolateChipCount(){
	ChocolateChipCount +=1;
	Cookies.set("ChocolateChip", ChocolateChipCount);
	document.getElementById("cchip").innerHTML="Chocolate Chip" + " - " + ChocolateChipCount;
}

function getOatmealCount(){
	OatmealCount +=1;
	Cookies.set("Oatmeal", OatmealCount);
	document.getElementById("oat").innerHTML="Oatmeal" + " - " + OatmealCount;
}

function getMolassesCount(){
	MolassesCount +=1;
	Cookies.set("Molasses", MolassesCount);
	document.getElementById("mol").innerHTML="Molasses" + " - " + MolassesCount;
}

function submit(){
	ChocolateChipCount = 0;
	Cookies.set("ChocolateChip", ChocolateChipCount);
	document.getElementById("cchip").innerHTML="Chocolate Chip";
	
	OatmealCount = 0;
	Cookies.set("Oatmeal", OatmealCount);
	document.getElementById("oat").innerHTML="Oatmeal";

	MolassesCount = 0;
	Cookies.set("Molasses", MolassesCount);
	document.getElementById("mol").innerHTML="Molasses";
}
