var tempCelsius = parseInt(prompt("Let's convert your temparture to Fahrenheit. What is the current temperature in Celsius?"));

var tempFahrenheit = parseInt((tempCelsius * (9/5)) + 32);

alert("Your temparture is " + tempFahrenheit) + " Fahrenheit.";

console.log(tempCelsius);
console.log(tempFahrenheit);