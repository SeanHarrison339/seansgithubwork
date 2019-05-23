let favouriteFilms = [
    "The good the bad and the ugly",
    "Home from Harvard",
    "Star Trek",
    "Big",
    "Home Alone"
];
const filmCheck = (film) => {

    if (film == "Star Trek"){
        console.log("correct")
    }
    else{
        console.log("not correct");
    }
}    

for (let favouriteFilmsIndex = 0; favouriteFilmsIndex <favouriteFilms.length; favouriteFilmsIndex++) {
    console.log(favouriteFilms[favouriteFilmsIndex]);
    filmCheck(favouriteFilms[favouriteFilmsIndex]);
}