// Задание 1.
// Дан массив пользователей:
const users = [
  { name: 'Alex', age: 24, isAdmin: false },
  { name: 'Bob', age: 13, isAdmin: false },
  { name: 'John', age: 31, isAdmin: true },
  { name: 'Jane', age: 20, isAdmin: false },
]
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

users.push(
  { name: 'Ann', age: 19, isAdmin: false },
  { name: 'Jack', age: 43, isAdmin: true }
)

console.log(users)

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

const getUserAverageAge = arr => {
  let sum = 0
  arr.forEach(function (number) {
    sum += number.age
  })
  return sum / arr.length
}

console.log(getUserAverageAge(users))

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

const getAllAdmins = arr => {
  let newArray = []
  arr.forEach(function (user) {
    if (user.isAdmin === true) {
      newArray.push(user)
    }
  }) 
  return newArray
}

console.log(getAllAdmins(users))

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

const first = (arr, n) => {
  let newArray = []
  if (n > 0 && n < arr.length) {
    for (let i = 0; i < n; i++) {
      newArray.push(arr[i])
    }
  } else if (n <= 0) {
    return newArray
  } else if (n > arr.length) {
    return console.error('Не может быть больше длинны массива')
  } else {
    newArray.push(arr[0])
  }
  return newArray
}

console.log(first(users, 3))
