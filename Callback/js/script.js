"use strict"

// function first() {
//     setTimeout(() => {
//         console.log("1");
//     }, 5000)
    
// }

// function second() {
//     console.log("2");
// }

// first();
// second();


function call(subject, callback) {
    console.log(`Men ${subject}ni o'rganyapman`);
    callback();
}

call("JavaScript", function massage(){
    console.log("Ajoib");
})


















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