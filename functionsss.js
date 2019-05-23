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