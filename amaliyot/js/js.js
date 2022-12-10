"use strict"

const numberOfSeries = +prompt("Nechta serial ko'rdingiz");



const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false
}


// let i = 0;

// do {
//     const serial = prompt("Oxirgi ko'rgan serialingiz"),
//           baho = +prompt("Necha baho berasiz");
//           i++;

//     if(serial != null && baho != null && serial != "" && baho != ""){
//         seriesDB.series[serial] = baho;
//         console.log("done");
//     }else {
//         console.log("error");
//         i--;
//     }

//     seriesDB.series[serial] = baho;
   
// } while(i < 2);






// while(i < 2) {
//     const serial = prompt("Oxirgi ko'rgan serialingiz"),
//           baho = +prompt("Necha baho berasiz");
//           i++;

//     if(serial != null && baho != null && serial != "" && baho != ""){
//         seriesDB.series[serial] = baho;
//         console.log("done");
//     }else {
//         console.log("error");
//         i--;
//     }

//     seriesDB.series[serial] = baho;
// }




for(let i = 0; i < 2; i++) {
    const serial = prompt("Oxirgi ko'rgan serialingiz"),
          baho = +prompt("Necha baho berasiz");
          

    if(serial != null && baho != null && serial != "" && baho != ""){
        seriesDB.series[serial] = baho;
        console.log("done");
    }else {
        console.log("error");
        i--;
    }

    seriesDB.series[serial] = baho;
}




console.log(numberOfSeries);


if(numberOfSeries.count < 5) {
    console.log("Kam serial ko'ribsiz");
} else if(numberOfSeries <= 5 && numberOfSeries < 10) {
    console.log("Siz klassik serialchi ekansiz");
} else if(numberOfSeries >= 10) {
    console.log("Siz serialchi zvezda ekansiz");
} else {
    console.log("Error");
}


// bjektga qo'shish


/*console.log(`${serial}: "${baho}"`)
console.log(`${serial1}: "${baho1}"`)*/


console.log(seriesDB);