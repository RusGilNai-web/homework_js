'use strict'

const todosKeys = {
  id: 'id',
  text: 'text',
  isCompleted: 'isCompleted'
}

const todos = []

const errTodoNotFound = todoID => `Todo with id ${todoID} is not found`

const getNewTodoID = todos => {
  return todos.reduce((maxID, todo) => Math.max(maxID, todo[todosKeys.id]), 0) + 1
}

const createTodo = (todos, text) => {
  const newTodo = {
    [todosKeys.id]: getNewTodoID(todos),
    [todosKeys.text]: text,
    [todosKeys.isCompleted]: false
  };
  todos.push(newTodo);
  return newTodo
}

const completeTodoByID = (todos, todoID) => {
  const todo = todos.find((todo) => todo[todosKeys.id] === todoID)
  if (!todo) {
    console.error(errTodoNotFound(todoID))
    return null
  }
  todo[todosKeys.isCompleted] = !todo[todosKeys.isCompleted]
  return todo
}

const deleteTodoByID = (todos, todoID) => {
  const todoIndex = todos.findIndex(todo => todo[todosKeys.id] === todoID)
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoID))
    return todos
  }
  todos.splice(todoIndex, 1)
  return todos
}