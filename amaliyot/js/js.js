"use strict"



let numberOfSeries;



function startApp() {

     numberOfSeries = +prompt("Nechta serial ko'rdingiz", "");

while(numberOfSeries == "" || numberOfSeries == null || isNaN(numberOfSeries)){
    numberOfSeries = +prompt("Nechta serial ko'rdingiz", "");
}
}
startApp();




const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false
}

function rememberMySeries() {
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
}
rememberMySeries();





console.log(numberOfSeries);

function detectLoveSeries() {
    
    if(numberOfSeries.count < 5) {
    console.log("Kam serial ko'ribsiz");
} else if(numberOfSeries <= 5 && numberOfSeries < 10) {
    console.log("Siz klassik serialchi ekansiz");
} else if(numberOfSeries >= 10) {
    console.log("Siz serialchi zvezda ekansiz");
} else {
    console.log("Error");
}
}

detectLoveSeries();



function showDb(hidden) {

    if(hidden) {
        console.log(seriesDB , "SALOM");
    } else {
        
    }

}



showDb(!seriesDB.private);

function writeGenres() {
    for(let i = 0; i <= 2; i++){
        const newSerial = prompt(`Yaaxshi ko'rgan janringiz ${i + 1}`, "");
        console.log(`Yaxshi ko'rgan janringiz ${newSerial}.`);
        seriesDB.genres[i] = newSerial;
    }
    
}   

    

writeGenres();