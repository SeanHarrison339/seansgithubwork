// Add an else statement in case the number is divisible by 5.

// for the numbers 1 through 20,
for (i=1; i<=20; i++) { 
    // if the number is divisible by 3 and 5, write "divisible"
    if (i % 3 === 0 && i % 5 === 0){
    console.log("divisible");
    } else 
    // if the number is divisible by 3, write "divisible"
    if ( i % 3 === 0 ) { 
    console.log("divisible");
    }
    else if (i % 5 ===0)
    // if the number is divisible by 5, write "divisible"
    {
    console.log("divisible");
    }
    // otherwise, write just the number
    else {
    console.log(i);
    }
    }