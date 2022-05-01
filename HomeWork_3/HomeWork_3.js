/* 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let a = 2;

for (let index = 1; index <= 10; index++) {
    console.log(a**index)
} */


/* 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

let a = 2;
const pow = function (index){
    console.log(a**index)
}
pow(2)
pow(3) */


/* 2. Написать скрипт, который выведет 5 строк в консоль таким образом, 
чтобы в первой строчке выводилось :), во второй :):) и так далее 

let str = ':)';
let res = '';
for (let index = 0; index < 5; index++) {
    res = res + str;
    console.log(res)
} */


/* 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, 
которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 

function printSmile(stroka, numberOfRows){
    let res = ''
    for (let index = 0; index < numberOfRows; index++) {
        res = res + stroka
        console.log(res)
    }
}
printSmile('*', 5) */

/* 3**.  Написать функцию, которая принимает на вход слово. 
Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв

Проверки: 'case', 'Case', 'Check-list' 


function getWordStructure(word){
  const vowels = 'aeiouy'.split('');
  const consonants = 'bcdfghklmnpqrstvwxz'.split('');
  let numberOfVowels = 0;
  let numberOfConsonants = 0;
  for(char of word.toLowerCase()){
    if(vowels.includes(char)) numberOfVowels++;
    if(consonants.includes(char)) numberOfConsonants++;
  }
  console.log(`Слово ${word} состоит из ${numberOfVowels} гласных и ${numberOfConsonants} согласных букв]`)
}
getWordStructure('Case')
getWordStructure('Check-list')
getWordStructure('AbraCadabra') */

/* 
 4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)
Проверки: 'abba', 'Abba' 

 function isPalindrom(str) {
    str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
    const lastIndex = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[lastIndex - i]) {
            return console.log('Строка НЕ полиндром!');
        }
    }
    return console.log('Строка полиндром!');

  } */

/*  isPalindrom('abba')
 isPalindrom('Abba')
 isPalindrom('Abbaa') */

----------------------------------------------------------------------------------------------

function isPalindrom2(str) {
   return str.toLowerCase() == str.toLowerCase().split('').reverse().join('')  
}
console.log(`Word ${isPalindrom2('Assa') ? 'It is a palindrome' : 'It is not a polindrome'}`)
