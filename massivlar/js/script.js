const arr = [2, 13, 14, 25, 8, 1];

arr.sort(comperaFn); // bu  erda faqat birinchi soniga qrab tartibga solib beradi

console.log(arr);

function comperaFn(a,b) {
    return a - b;
}
// console.log(arr.length);

// arr.pop(); // massivdagi oxirigi qiymatni o'chirib tashlaydi
// arr.push(8); // massivni oxiriga qiymat qo'shadi


//                     // umuman ishlatilmaydi shift
// arr.shift(); // massivni boshidagi qiymatni olib tashlaydi
// arr.unshift("Salom"); // massivni boshiga qiymat qo'shadi


// console.log(arr);


            // interatsiyaning birinchi usuli

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


            // ikkinchi usuli
// for(let value of arr) {
//     console.log(value);
// }


          // massivdan bizga index raqam chiqarib berilayotganda oxirig elementga +1 qoshadi va indexni chiqarib beradi
    //  arr[99] = 0; // 99 index ga 0 qo'shdim va +1 bo'ldi. Length 100 chiqdi
    //  console.log(arr); // javibda  [ 1, 2, 3, 4, 5, 6, <93 empty items>, 0 ] {empy items bo'sh joy degani}





                // eng ko'p foydalanadigan sikl turi
// arr.forEach(function(item, index, arr){ // uchta parametr qabul qiladi (items, index, arr)
//     console.log(`${index} : ${item} into arr ${arr}`)
// })


    // har bir interatsiya bo'lganda callback ishlaydi
// INDEX arraudagi indexni qaytaradi
// ITEM arraydagi qiymatni qaytaradi
// ARR arrayni o'zini chiqarib beradi


// arr.forEach(function (item, index, arr){
//   console.log(`${index} : ${item} into arr ${arr}`);
// }) 
   
const movies = prompt("What's your favourite movies", "");
const userMovies = movies.split(", "); // string qiymatni massivga o'girib beradi
// har bitta vetgul va probel bo'lgan joyi avtomatik massivga qo'shilib ketadi
userMovies.sort(); // berilgan qiymatni alfavit bo'yicha sartirivka qilib beradi
console.log(userMovies.join("_")); // join bo'lingan joyiga istalgan ishoramizni qo'yib beradi



