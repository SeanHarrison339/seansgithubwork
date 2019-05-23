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