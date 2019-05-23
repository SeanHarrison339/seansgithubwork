let orderCount = 0;
const takeOrder = (topping1 , topping2 , topping3 , topping4 , topping5) => {
   console.log(`sandwich ${topping1} , ${topping2} , ${topping3} , ${topping4} , ${topping5}`);
   orderCount++;
   console.log(orderCount)
}

takeOrder("cheese" , "tomato" , "salad" , "bacon" , "italian herb and cheese");
takeOrder("bacon" ,  "sausage" , "white bread" , "tomato sauce" , "cheese");