// chapter 14-22
var city1 = "karachi";
var city2 = "lahore";
var city3 = "islamabad";
var city4 = "hyderabad";
var city5 = "sukkur";

var city = prompt("Enter Your City");

if (city === city1) {
    alert("Mobile Nikal ------")
}
else if (city === city2) {
    alert("Lahore Lahore ee")
}
else if (city === city3) {
    alert("hi bro whassup")
}
else if (city === city4) {
    alert("ada chanh piyanden?")
}
else if (city === city5) {
    alert("dawat athai location kachaa")
}
else if(city !== city1 && city2 && city3 && city4 && city5){
    alert("city not found")
}

//for loop
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;


// program to display the sum of natural numbers

let sum = 0;
const n = 100

// loop from i = 1 to i = n
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    sum += i;  // sum = sum + i
}

console.log(`sum: ${sum}`);

// Output: sum: 5050

//arrays
var i;  
var emp = new Array();  
emp[0] = "ammar";  
emp[1] = "asif";  
emp[2] = "faizan";  
  
for (i=0;i<emp.length;i++){  
document.write(emp[i] + "<br>");  
}  