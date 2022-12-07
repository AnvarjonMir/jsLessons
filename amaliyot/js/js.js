"use strict"

const numberOfSeries = +prompt("Nechta serial ko'rdingiz");

const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false
}

console.log(numberOfSeries);



const serial = prompt("Oxirgi ko'rgan serialingiz"),
      baho = +prompt("Nechta baho berasiz"),
      serial1 = prompt("Oxirgi ko'rgan serialingiz"),
      baho1 = +prompt("Nechta baho berasiz");

// bjektga qo'shish
seriesDB.series[serial] = baho;
seriesDB.series[serial1] = baho1;

/*console.log(`${serial}: "${baho}"`)
console.log(`${serial1}: "${baho1}"`)*/


console.log(seriesDB);