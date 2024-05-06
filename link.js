// chapter 14-17
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

