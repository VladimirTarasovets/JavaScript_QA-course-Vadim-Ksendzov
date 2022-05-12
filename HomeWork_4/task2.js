/* Дан массив объектов. Каждый объект является идентификационной карточкой человека. 
Нам нужно хранить только уникальные значения в этом массиве. 
Реализуйте функцию, которая будет выполнять эту работу. */
const fil = require('./task2.json'); 

for (let i = 0; i < fil.length; i++){
    for (let j = 0; j < fil.length; j++){
        if(i == j){
            continue;
        }
        else if(fil[i].name == fil[j].name)
        {
            fil.splice(j, 1);
        }
    }
}
fil.forEach(element => console.log(element.name));
//----------------------------------------------------------------------------------------------------------

const fs = require('fs')
const users = JSON.parse(fs.readFileSync("./task2.json"));
let uniquePersons = []
users.forEach((el => {
    if (uniquePersons.indexOf(JSON.stringify(el)) === -1) {
        uniquePersons.push(JSON.stringify(el));
    }
}));
console.log(uniquePersons)
//-----------------------------------------------------------------------------------------------------------

let chekid = Array.from(new Set(users.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));
console.log(chekid)