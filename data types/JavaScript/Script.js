// qat'iy rejim
 "use strict" // eski kodlar yozilmasligi uchun

let number = 50; // Data Type = Number // haqiqiy son uchun 6.7 nuqta qo'llaniladi

                // NUMBER
// Infinity matematikada yo'q narsani qilsak chiqadi
console.log(80 / 0); // infinity cheksizlik // 80 sonini o'rniga xohlagan soningizni yozishiz mumkin
console.log(- 80 / 0); // infinity - cheksizlik 

// Ikki xil ma'lumot turini bir biriga qo'shsak NaN chiqadi
console.log("Anvar" / 8); // NaN ikkita ma'lumot turi bir biriga qo'shilganda chiqadi // 



                //String
const clientName = "Anvarjon. Xoshlagancha son yozishimiz mumkin";



                // Boolean
const isMarried = false;     // false = yo'q  // noto'g'ri
const isCircleEarth = true;  // True = ha   // To'g' 

                // null 
console.log(clientAge); // Yo'q o'zgaruvchini chaqirsak



                //underfined  // o'zgaruvchi bor lekin qiymat yo'q 
let und;
console.log(und);  // o'zgaruvchi bor lekin unda hech qanaqa qiymat bo'lmasa UNDERFINED chiqadi

                

                //objekt
const thief = {

//  key: value
    age: 30, // number
    Jacket: "black", // streng
    isLong: false, //boolean
};

console.log(thief);
console.log(thief["age"])  // ikkinchi lekin kam ishlatiladiga yo'li


                // array   massiv
    //          0       1          2      3   4   5
const colors = ["red", "black", "green", 10, [], {}];
console.log(colors[5]); // key: 0, 1, 2, 3, 4, 5



