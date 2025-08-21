// Write your JavaScript here


function calculateChange() {
let payment = document.getElementById("amount-received")
let price = document.getElementById("amount-due")
let change = (payment.value - price.value);
document.getElementById("amount-due-output").textContent = change;
change*= 100; // Convert to cents
if(change < 0) {
    alert("Please enter a valid amount.");
    return;
}
if(change === 0) {
    alert("No change needed.");
    return;
}
if(change > 0) {
    let hundreds = Math.floor(change / 10000);
    change %= 10000;
    let fifties = Math.floor(change / 5000);
    change %= 5000;
    let twenties = Math.floor(change / 2000);
    change %= 2000;
    let tens = Math.floor(change / 1000);
    change %= 1000;
    let fives = Math.floor(change / 500);
    change %= 500;
    let dollars = Math.floor(change / 100);
    change %= 100;
    let quarters = Math.floor(change / 25);
    change %= 25;
    let dimes = Math.floor(change / 10);
    change %= 10;
    let nickels = Math.floor(change / 5);
    change %= 5;
    let pennies = Math.ceil(change / 1);

    document.getElementById("hundreds-output").textContent = hundreds;
    document.getElementById("fifties-output").textContent = fifties;
    document.getElementById("twenties-output").textContent = twenties;
    document.getElementById("tens-output").textContent = tens;
    document.getElementById("fives-output").textContent = fives;
    document.getElementById("dollars-output").textContent = dollars;
    document.getElementById("quarters-output").textContent = quarters;
    document.getElementById("dimes-output").textContent = dimes;
    document.getElementById("nickels-output").textContent = nickels;
    document.getElementById("pennies-output").textContent = pennies;
}


}