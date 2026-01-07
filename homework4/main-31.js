// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

function calculateFinalPrice(price, discount, tax) {
  let priceWithDiscount = price - (price * discount / 100)
  return priceWithDiscount + (priceWithDiscount * tax)
}

console.log(calculateFinalPrice(1234, 32, 0.45))

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

const ACCESS = prompt('Имя пользователя', 0)
const PASSWORD = +prompt('Пароль', 0)

const checkAccess = (ACCESS, PASSWORD) => {
  if (ACCESS === 'admin' && PASSWORD === 123456) {
    return 'Доступ разрешен'
  } else {
    return 'Доступ запрещен'
  }
}

console.log(checkAccess(ACCESS, PASSWORD))

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

const time = +prompt('Введите время от 0 до 23')

function getTimeOfDay(time) {
  if (time <= 5) {
    return 'Ночь'
  } else if (time <= 11) {
    return 'Утро'
  } else if (time <= 17) {
    return 'День'
  } else if (time <= 23) {
    return 'Вечер'
  } else {
    return 'Что то не так'
  }
}

console.log(getTimeOfDay(time))

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

const firstNum = +prompt('Первое число', 0)
const secondNum = +prompt('Второе число', 0)

const findFirstEven = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return i
    } else {
      return 'Четных чисел нет'
    }
  }
}

console.log(findFirstEven(firstNum, secondNum))