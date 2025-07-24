console.log("This is the train.ts file");
console.log('Bugungi MIT-Task natijasi: ');
/*TASK R

Shunday function yozing, u string parametrga ega bo'lsin.
Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

MASALAN: calculate("1 + 3"); return 4;
1 + 3 = 4, shu sababli 4 natijani qaytarmoqda. */

function calculate(expression: string): number {

  const parts = expression.split('+').map(part => part.trim());


  const numbers = parts.map(Number);


  return numbers[0] + numbers[1];
}


console.log(calculate("1 + 3")); // 4
console.log(calculate("10 + 25")); // 35




/**TASK Q:

Shunday function yozing, u 2 ta parametrga ega bo'lib
birinchisi object, ikkinchisi string bo'lsin.
Agar qabul qilinayotgan ikkinchi string, objectning
biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "year"); return false;
Ushbu misolda, ikkinchi argument sifatida berilayotgan 'year' objectning
propertysida mavjud bo'lmaganligi uchun 'false' natijani qaytarmoqda. */

// function hasProperty(obj: object, key: string): boolean {
//   return key in obj;
// }


// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));  // false

// // TASK P:

// // Parametr sifatida yagona object qabul qiladigan function yozing.
// // Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

// // MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray(obj: { [key: string]: any }): [string, any][] {
//   return Object.entries(obj);
// }
// console.log(objectToArray({ a: 10, b: 20 }));


// TASK O:

// Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
// Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

// Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
// Qolganlari nested bo'lib yoki type'lari number emas.


// function calculateSumOfNumbers(arr: any[]): number {
//   let sum = 0;

//   for (const item of arr) {
//     if (typeof item === "number") {
//       sum += item;
//     }
//   }

//   return sum;
// }
// console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35])); // 45

/*TASK N:

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.

MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;*/
// function palindromCheck(str: string): boolean {
//     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     const reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
// }

// console.log(palindromCheck("dad")); // true
// console.log(palindromCheck("son")); // false
/**TASK M: 

Shunday function yozing, u raqamlardan tashkil
 topgan array qabul qilsin va array ichidagi har bir raqam
  uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil
   topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1},
 {number: 2, square: 4}, {number: 3, square: 9}]; */



// function getSquareNumbers(arr: number[]) {
//   return arr.map(num => ({
//     number: num,
//     square: num * num
//   }));
// }
// console.log(getSquareNumbers([1, 2, 3, 4, 5]));

/*Project standards:
-Logging standards
-Naming standards:
    function, variable, method => CAMEL
    class                      =>PASCAL
    folder, file               =>KEBAB
    css                        =>SNAKE */

    /*  
    request join
    self-destroy
    */

/*TASK L: 

Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";*/ 


// function reverseSentence(s: string): string {
//   const words: string[] = s.split(' ');
//   const reversedWords: string[] = words.map(word => word.split('').reverse().join(''));
//   return reversedWords.join(' ');
// }

// // Test
// console.log(reverseSentence("we like coding!")); // chiqishi: "ew ekil !gnidoc"




/*TASK K: 

Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1;*/
// function countVowels(str: string): number {
//   const vowels = "aeiouAEIOU"; 
//   let count = 0;
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }  
//   return count;
// }
// console.log(countVowels("I came from Uzbekistan!")); // => 8



// function findLongestWord(str: string): string {
  
//   let words = str.split(" ");

  
//   let longestWord = "";

 
//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord("I came from Uzbekistan!")); // => "Uzbekistan!"
/*
TASK-I:

Shunday function tuzing, u parametrdagi array ichida eng ko'p
takrorlangan raqamni topib qaytarsin.

MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.*/
// function majorityElement(arr: number[]): number {
//   const count: { [key: number]: number } = {};

//   for (const num of arr) {
//     count[num] = (count[num] || 0) + 1;
//   }

//   let maxNum = arr[0];
//   let maxCount = 0;

//   for (const num in count) {
//     if (count[num] > maxCount) {
//       maxCount = count[num];
//       maxNum = Number(num);
//     }
//   }

//   return maxNum;
// }
 
// console.log(majorityElement([2,3,5,23,23,23,1,48,48,75,75,]))




/*TASK HH2-TASK: 

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin

MASALAN: getDigits("m14i1t") return qiladi "141"*/
// function getDigits(str: string): string {
//     let result = "";
//     for (let char of str) {
//         if (!isNaN(Number(char)) && char !== " ") {
//             result += char;
//         }
//     }
//     return result;
   
// }

// console.log(getDigits("i am 24 years old"));





/*TASK H: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib,
 faqat positive qiymatlarni olib string holatda return qilsin

MASALAN: getPositive([1, -4, 2]) return qiladi "12"*/

//Solution:

// function getPositive(arr: number[]) {
//     if (!Array.isArray(arr) || arr.length === 0) {
//         console.error("Iltimos, array kiriting.");
//         return false; 
//     }
//     let positiveValues: number[] = arr.filter(num => num > 0);
//     return positiveValues.join('');
// }
// console.log(getPositive([-9, 25, 2])); 







/*TASK G:

Yagona parametrga ega function tuzing.
Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.*/

/*function getHighestIndex(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        console.error("Iltimos, array kiriting.");
        return false; 
    }

    let highestValue = arr[0];
    let highestIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > highestValue) {
            highestValue = arr[i];
            highestIndex = i;
        }
    }

    return highestIndex;
}

console.log(getHighestIndex([12])); */
