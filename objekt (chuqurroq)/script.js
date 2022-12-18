
const odamXislati = {
    yoshi: 22,
    buyi: 1.80,
    rangi: "sariq",
    holati: "o'rtacha",
    qiziqishi: "dasturlash",
    rangi: {
        soqchi: "siagarrang",
        uzi: "sariq"
    },
    kiyimi: {
        egnida: "futbolka",
        ketida: "shim",
        oyogida: "Krassivka",
    },

    NewMOd: function newModel()  {   // metod
        console.log("Hammaga salom");
    }
}

odamXislati.NewMOd();
    // const {yoshi, buyi, rangi, holti} = odamXislati;

    // console.log(yoshi, buyi);

    // delete odamXislati.rangi;

    // console.log(odamXislati)


    // for (key in odamXislati) {
    //     if(typeof odamXislati[key] === "object"){
    //         for(i in odamXislati[key]){
    //             console.log(`Bu kishi ${i} ${odamXislati[key][i]}`);
    //         }
    //     }else{
    //     console.log(`Bu kishining ${key} ${ odamXislati[key]}`);}
    // }



let    a = 0;

    for(key in odamXislati) {
        a++;
    }

    console.log(a);