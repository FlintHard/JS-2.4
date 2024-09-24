//
/* Задание 1: Использование условных конструкций if-else */
//
let age = 61;
// Напишите условную конструкцию здесь:

if (age < 18) {
  console.log("Вы слишком молоды.");
} else if (age >= 18 && age <= 65) {
  console.log("Добро пожаловать!");
} else if (age > 65) {
  console.log("Вам пора на пенсию.");
} else {
  console.log("Пожалуйста, введите корректный возраст.");
}


//
/* Задание 2: Реализация условий с помощью конструкции switch */
//
let day = 9; // Попробуйте с разными значениями
// Напишите конструкцию switch здесь
switch (day) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  case 4:
    console.log("Четверг");
    break;
  case 5:
    console.log("Пятница");
    break;
  case 6:
    console.log("Суббота");
    break;
  case 7:
    console.log("Воскресенье");
    break;
  default:
    console.log("Некорректный день");
}


//
/* Задание 3: Подсчет суммы всех четных чисел от 0 до n */
//
let n = 99; // Задайте значение n
let sum = 0;
// Цикл for для подсчета суммы четных чисел
for (let i = 0; i <= n; i++) {
  if (i % 2 === 0) {
    sum += i; // Добавляем к сумме только четные числа
  }
}
console.log(`Сумма всех четных чисел от 0 до ${n} равна ${sum}`);


//
/* Задание 4: Подсчет количества совпадений подстроки */
//
let str = "Hello, how are you? Hello again!"; // Исходная строка
let subStr = "a"; // Подстрока для поиска
let count = 0; // Счетчик вхождений
// Напишите цикл здесь
let position = 0;
while ((position = str.indexOf(subStr, position)) !== -1) {
  count++; // Увеличиваем счетчик при каждом совпадении
  position += subStr.length; // Переходим к следующей позиции после найденного совпадения
}
console.log(`Количество вхождений подстроки "${subStr}" в строке: ${count}`);


//
/* Задание 5: Применение циклов и условных конструкций совместно */
//
/* Программа для вывода числа от 1 до 100 с учетом заданного условия 
для вывода "Fizz", "Buzz" и "FizzBuzz" */
// Цикл для перебора чисел от 1 до 100
for (let i = 1; i <= 100; i++) {
  /* Условная конструкция проверки кратности чисел и вывода 
  соответствующих значений */
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


//
/* Задание 6: Реализация условий с использованием if-else if и switch */
//
let season = "autumn"; // Замените на разные значения

// Версия с if-else if
if (season === "winter") {
  console.log("Это зима!");
} else if (season === "spring") {
  console.log("Это весна!");
} else if (season === "summer") {
  console.log("Это лето!");
} else if (season === "autumn") {
  console.log("Это осень!");
} else {
  console.log("Некорректное значение сезона.");
}

// Версия с switch
switch (season) {
  case "winter":
    console.log("Это зима!");
    break;
  case "spring":
    console.log("Это весна!");
    break;
  case "summer":
    console.log("Это лето!");
    break;
  case "autumn":
    console.log("Это осень!");
    break;
  default:
    console.log("Некорректное значение сезона.");
}


//
/* Задание 7: Создание цикла с выходом по условию */
//
let number = 0;
// Напишите цикл здесь
while (number <= 10) {
  number = prompt("Введите число больше 10:"); 
  number = Number(number); 
}
console.log("Число больше 10 введено!");


//
/* Задание 8: Применение цикла do-while */
//
let number = 0;
// Напишите цикл do-while здесь
do {
  number = prompt("Введите число больше 10:");
  number = Number(number); 
} while (number <= 10);
console.log("Число больше 10 введено!");
