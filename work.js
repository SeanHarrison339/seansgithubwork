console.log("Hello World!");

console.log("Hello World".length);

console.log(Math.random());


console.log("Hello World");
//Math.random() gives me a number between 0 and 1.
console.log(Math.random());

//Math.random() gives me a number between 0 and 10.
console.log(Math.random()*10);

//Math.random() gives me a interger number between 0 and 10.
console.log(Math.floor(Math.random()*10));
VARIABLES]
console.log("    |    |    ")
console.log("    |    |    ")
console.log("    |    |    ")
console.log("--------------")
console.log("    |    |    ")
console.log("    |    |    ")
console.log("    |    |    ")
console.log("--------------")
console.log("    |    |    ")
console.log("    |    |    ")
console.log("    |    |    ")
console.log("    |    |    ")


console.log("    |    |    ")
console.log("    |    |    ")
console.log("    |    |    ")
console.log("--------------")
console.log("    |    |    ")
console.log("    |    |    ")
console.log("    |    |    ")
console.log("--------------")
console.log("    |    |    ")
console.log("    |    |    ")
console.log("    |    |    ")
console.log("    |    |    ")
let favouriteDrink = "coffee";
console.log(favouriteDrink);
console.log("My favourite drink is " + favouriteDrink);
console.log(`My favourite drink is ${favouriteDrink}`);


let space1 = "x";
let space2 = "x";
let space3 = "x";

let space4 = "o";
let space5 = "x";
let space6 = "o";

let space7 = "x";
let space8 = "o";
let space9 = "x";


console.log("   |   |   ");
console.log( `${space1} | ${space2} | ${space3}` );
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log( `${space4} | ${space5} | ${space6}`  );
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log( `${space7} | ${space8} | ${space9}`  );
console.log("   |   |   ");


if(space1 == space2 && space2 ==space3){
   console.log("Winning")
}
if(space4 == space5 && space5 == space6){
   console.log("sorry try again")
}
if(space7==space8&&space8==space9){
   console.log("sorry try again")
}
--------------------------------------------------------------------------
IF ELSE
let music = "Music";
let myMusic = "classical";
let noMusic = "silence";

if (music = myMusic) {
   console.log("Oh no it's that classical again");
}
else if (music == noMusic) {
   console.log("Arh, peace and quiet");
}
else {
   console.log("Nice and noisy");
}

if(1==="1"){
   console.log(true);
}
else{
   console.log(false);
}

if(1 !="1"){
   console.log(true);
}
else{
   console.log(false);
}
let age = 16;
let country = "UK";

if (country == "UK" && age >= 18) {
   console.log("What drinks would you like")
}
else if (country == "UK" && age <= 18) {
   console.log("Sorry im not serving you")
}
else{
   console.log("what part of Germany")

}
let age = 23;
let country = Germany;

if (country == "UK" && age >= 18) {
   console.log("hat drinks would you like")
}
else if (country == "UK" && age <= 18) {
   console.log("Sorry im not serving you")
}
let eveonline = "Game"

if (eveonline == "Game"){
   console.log("Starting EvE Online")
}
let day = "Saturday";

if (day == "Saturday" || day == "Sunday"){
   console.log("It's the weekend");
}
else {
   console.log("When's weekend?");
}
------------------------------------------------------------------------------------------------------------------
FUNCTIONS
let coffeeIsGrinding=false;

const pressGrindBeans=()=>{
   if (coffeeIsGrinding){
   console.log("Stopping the grind");
   coffeeisGrinding = false;
   } else {
   console.log("Grinding is about to begin")
   }
}

pressGrindBeans();
const coffeeMake = (size, type) => {
   console.log|(`Using ${size} and making ${type}`);

}

coffeeMake("tall", "latte");
const addUp=(n1, n2)=>{
   return n1 + n2
}
console.log("the sum")

addUp(7,3);
console.log(addUp(2,5));
const multiplyByNineFifths = (celsius) => {
   return celsius * (9/5);
};
const getFahrenheit = (celsius) => {
   return multiplyByNineFifths(celsius) + 32;
};

console.log("The temperature is " + getFahrenheit(15) + "°F");
function factorial (n) {
   if ((n=== 0) || (n===1)){
       return 1;
   } else {
       return (n* factorial(n-1));
   }
}
console.log(factorial(33));
let number = 15

const square = function(number) {
   return number * number;
};
square(5);
function factorial (n) {
   if ((n===0) || (n===1)) {
       return 1;
   } else {
       return (n * factorial(n-1))
   }
}

const factorial = (n) => {
   if ((n===0) || (n===1)) {
       return 1;
   } else {
       return (n * factorial(n-1))
   }
}
let orderCount = 0;
const takeOrder = (topping , base) => {
   console.log(`Pizza with ${topping} and ${base}`);
   orderCount++;
   console.log(orderCount)
}

takeOrder("pineapple", "thin base");
takeOrder("pepperoni", "thick base");

Eric Diedrichs [12:31 PM]
let orderCount = 0;
const takeOrder = (topping , base) => {
   console.log(`Pizza with ${topping} and ${base}`);
   orderCount++;
   console.log(orderCount)
}

takeOrder("pineapple", "thin base");



let balancePersonal = 500
let pin = 1234

const dispenseCash = (pin , balancePersonal) => {
   if
       (pin == 1234 && balancePersonal <= 500)
       console.log ("Transaction accepted")
   else
        (console.log("Transcation Rejected"))
}



dispenseCash(1234, 501)

/*
console.log(`Pin accepted ${pin} withdrawing ${cash}`);
balancePersonal;
console.log(balancePersonal)
*/