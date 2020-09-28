"strict"
console.log("Hello World!!!!!!"); //Prints hello world in console

/**
 * Event listeners in this app!
 */




//Fixed price => Constants
//Variables => Number of donuts, delivery time, subtotal and total

const DONUTPRICE = 200;
const VAT = 0.07;

const vat = document.getElementById('vat');
vat.value = VAT;



function updateValue(){
    let name = document.getElementById("name").value;
    let numOfDonuts = document.getElementById("number-of-donuts").value;
    let deliveryTime = document.getElementById("time").value;
    let subTotal = numOfDonuts * DONUTPRICE;
    const subtotalField = document.getElementById("subtotal");
    subtotalField.value = subTotal;
    let calculatedSum = (subTotal * VAT) + subTotal;
    let total = calculatedSum.toFixed(2)
    let totalField = document.getElementById('total');
    totalField.value = total;
}

function stopDefault(){
    let totalPrice = document.getElementById('total').value;
    console.log(`The total price is ${totalPrice}`)
}