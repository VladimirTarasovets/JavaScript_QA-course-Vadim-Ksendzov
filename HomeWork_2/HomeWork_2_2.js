/* 1*:
Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
Пример: const checkAge = function(age) {
Ваши преобразования
}
Вывести в консоль результат работы функции с возрастами 17, 18, 61
*/

let age_2 = 18;
let age_3 = 60;

/* const checkAge1 = function (age_1) {
 
  if (age_1 < age_2) {
    console.log(
      "You don't have access cause your age is " + age_1 + "It's less then"
    );
  } else if ((age_1 >= age_2) && (age_1 < age_3)) {
    console.log('Welcome  !');
  } else if (age_1 > age_3) {
    console.log('Keep calm and look Culture channel');
  } else {
    console.log('Technical work');
  }
};
 
checkAge1(17)
checkAge1(18)
checkAge1(61) */


/* 2*:
Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. 
И если он не Number - кидалась ошибка.
*/
/* const checkAge2 = function (age_1) {

  if (typeof age_1 !== 'number') {
    console.log('Error! This is not Number!');
  } else {

    if (age_1 < age_2) {
      console.log(
        "You don't have access cause your age is " + age_1 + "It's less then"
      );
    } else if (age_1 >= age_2 && age_1 < age_3) {
      console.log('Welcome  !');
    } else if (age_1 > age_3) {
      console.log('Keep calm and look Culture channel');
    } else {
      console.log('Technical work');
    }

  }
};
 
checkAge2(17);
checkAge2(18);
checkAge2(61);
checkAge2('dsf');
 */

/* 3**:
Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) 
пропускалось, преобразовываясь в number
*/
const checkAge3 = function (age_1) {

/*   age_1 = Number(age_1);
  console.log(age_1)

  if (!isNaN(age_1)) */  
  if (!age_1)  
  {
    console.log('Error! This is not Number!');
  } else {
    if (age_1 < age_2) {
      console.log(
        "You don't have access cause your age is " + age_1 + " It's less then"
      );
    } else if (age_1 >= age_2 && age_1 < age_3) {
      console.log('Welcome  !');
    } else if (age_1 > age_3) {
      console.log('Keep calm and look Culture channel');
    } else {
      console.log('Technical work');
    }
  }
};
 
/*
checkAge3(17);
checkAge3(18);
checkAge3('2');
checkAge3('2lkj');
*/

let agePpomt = prompt('Enter age')
checkAge3(agePpomt)
