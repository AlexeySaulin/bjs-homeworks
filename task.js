"use strict";
//task1
function getResult(a, b, c) {
    //формула вычисления дискриминаната
    let D = (b * b) - (4 * a * c);
    let x1, x2;
    //если дискриминант меньше нуля
    if(D < 0) {
      console.log('Дискриминант меньше нуля, корней нет')
    }
    //если дискриминант равен нулю, одно решение
    else if(D == 0) {
      x1 = -b / 2 * a;
      console.log('x1,2 = ' + x1); 
      return
    }
    //если дискриминант больше нуля, два решения
    else if(D > 0) {
      let x1x2 = [];
      x1x2[0] = (-b + Math.sqrt(D)) / (2 * a);
      x1x2[1] = (-b - Math.sqrt(D)) / (2 * a);
      console.log('x1,2 = ' + x1x2 );
      return
    }
}    

getResult( 1, -3, -4)

//task2
function askDrink(name, dateOfBirthday) {
  let today = new Date();
  let birthDate = new Date(dateOfBirthday);
  //вычисляем разницу между гтекущим годом и годом рождения
  let age = today.getFullYear() - birthDate.getFullYear();
 
  //если больше 18
  if(age > 18) {
    console.log( `Не желаете ли олд-фэшн, ${name}?`);
    //если меньше 18
  } else {
    console.log(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`)
  }
 return
}
askDrink('Катя', '2014-12-03')
askDrink('Ваня', '1990-12-03')


//task3
//создаем функцию для расчета среднего значения
function calculateAverage(marks){
  let total = 0;
    for (i = 0; i < marks.length; i += 1) {
      total += marks[i];
  }
  return total / marks.length;
}

//создаем функцию для вывода средней оценки
function getAverageMark(marks) {

 
  if(marks.length > 5) {
    //если оценок больше 5тиб обрезаем массив
    marks.splice(5);
    console.log('Оценок больше пяти. Средняя оценка, учитывая первых 5 оценок: ' + calculateAverage(marks))
  } else {
    console.log('Средняя оценка: ' + calculateAverage(marks))
  }

  
}

getAverageMark([1, 2, 3, 4, 5, 6 ])
getAverageMark([1, 2])