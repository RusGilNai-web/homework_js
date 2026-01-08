// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
  name: 'Billy',
  lastName: 'Bones',
  age: 29,
  isProgrammer: false,
  isPirate: true
}

console.log(person)

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

const justObject = {}

function isEmpty(object) {
  for (const key in object) {
    return false
  }
  return true
}

console.log(isEmpty(justObject))

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
  title: 'Задача 1',
  description: 'Купить хлеб',
  isCompleted: false
}

const updateTask = {
  isCompleted: true
}

const cloneAndModify = (object, modifications) => {
  return {...object, ...modifications}
}

let cloneTask = cloneAndModify(task, updateTask)

for (let key in cloneTask) {
  console.log(cloneTask[key])
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

const myObject = {
    method1() {
      console.log('Метод 1 вызван');
    },
    method2() {
      console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};

function callAllMethods(object) {
  for (let key in object) {
    if (typeof(object[key]) === 'function') {
      object[key]()
    }
  }
}

callAllMethods(myObject)