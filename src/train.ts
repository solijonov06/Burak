console.log("This is the train.ts file");
console.log('Bugungi MIT-Task natijasi: ');
/*
TASK-I:

Shunday function tuzing, u parametrdagi array ichida eng ko'p
takrorlangan raqamni topib qaytarsin.

MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.*/

// function majorityElement(arr: number ){
//     for(let i; i)

// }

/*Project standards:
-Logging standards
-Naming standards:
    function, variable, method => CAMEL
    class                      =>PASCAL
    folder, file               =>KEBAB
    css                        =>SNAKE */


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
