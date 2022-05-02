/* Дан массив объектов. Каждый объект является идентификационной карточкой человека. 
Нам нужно хранить только уникальные значения в этом массиве. 
Реализуйте функцию, которая будет выполнять эту работу. */

const fs = require('./task2.json'); 

for (let i = 0; i < fs.length; i++){
    for (let j = 0; j < fs.length; j++){
        if(i == j){
            continue;
        }
        else if(fs[i].name == fs[j].name)
        {
            fs.splice(j, 1);
        }
    }
}
fs.forEach(element => console.log(element.name));
