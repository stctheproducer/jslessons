// EVENT BUBBLING
// document.querySelector('.card-title').addEventListener('click', () => {
//   console.log('card-title')
// })

// document.querySelector('.card-content').addEventListener('click', () => {
//   console.log('card-content')
// })

// document.querySelector('.card').addEventListener('click', () => {
//   console.log('card')
// })

// document.querySelector('.col').addEventListener('click', () => {
//   console.log('col')
// })

// EVENT DELEGATION
// document.body.addEventListener('click', deleteItem)

// function deleteItem(e) {
//   if (e.target.parentElement.classList.contains('delete-item')) {
//     console.log('delete-item')
//     e.target.parentElement.parentElement.remove()
//     e.preventDefault()
//   }
// }

// LOCAL & SESSION STORAGE
// set local storage item
// localStorage.setItem('name', 'John')
// localStorage.setItem('age', '30')

// set session storage
// sessionStorage.setItem('name', 'Beth')

// remove from local storage
// localStorage.removeItem('name')

// get from storage
// const name = localStorage.getItem('name')
// const age = localStorage.getItem('age')
// console.log(name, age)

// // clear local storage
// localStorage.clear()

document.querySelector('form').addEventListener('submit', (e) => {
  const task = document.getElementById('task').value

  let tasks

  if (localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.push(task)

  localStorage.setItem('tasks', JSON.stringify(tasks))

  e.preventDefault()
})

const tasks = JSON.parse(localStorage.getItem('tasks'))

tasks.forEach((task) => {
  console.log(task)
})
