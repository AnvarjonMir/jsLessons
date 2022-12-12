"use strict"

function first(cb) {
    // code
    setTimeout(() =>{  // sun'iy kechiktirish
        console.log(1); // bu payt da funksiyaning o'rni alashib qoladi va bu noto'g'ri
        cb();
    }, 1000);
    
}


function second() {
    //code
    console.groupCollapsed(2);
}

first(second);



















// function edu(subjekt, callback) { // Qaysidir funcsiya ishga tushgandan keeyin callback ishga tushadi
//     console.log(`Men ${subjekt}ni o'rganyapman`);
//     callback();
// }

// edu("JavaScript", function() {
// console.log("That's great")
// });




// function edu(subjekt, callback) { // Qaysidir funcsiya ishga tushgandan keeyin callback ishga tushadi
//     console.log(`Men ${subjekt}ni o'rganyapman`);
//     callback();
// }


// function done () {
//     console.log("Ajoib");
// }



// edu("JavaScript", done);