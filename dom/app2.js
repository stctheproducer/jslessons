// document.querySelector('.clear-tasks').addEventListener('click', (e) => {
//   console.log('Hello World')

//   e.preventDefault()
// })

// document.querySelector('.clear-tasks').addEventListener('click', onClick)

// function onClick(e) {
//   e.preventDefault()
//   // console.log('Clicked!')
//   let val

//   val = e

//   // Event target
//   val = e.target.className
//   val = e.target.classList
//   // e.target.innerText = 'Hello'
//   val = e.type

//   console.log(val)
// }

// MOUSE EVENTS
// const clearBtn = document.querySelector('.clear-tasks')
// const card = document.querySelector('.card')
// const heading = document.querySelector('h5')

// clearBtn.addEventListener('click', runEvent)
// clearBtn.addEventListener('dblclick', runEvent)
// clearBtn.addEventListener('mousedown', runEvent)
// clearBtn.addEventListener('mouseup', runEvent)
// card.addEventListener('mouseenter', runEvent)
// card.addEventListener('mouseleave', runEvent)
// card.addEventListener('mouseover', runEvent)
// card.addEventListener('mouseout', runEvent)
// card.addEventListener('mousemove', runEvent)

// Event Handler
// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`)

//   heading.innerHTML = `MouseX: ${e.offsetX} | MouseY: ${e.offsetY}`

//   document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`
// }

// KEYBOARD AND INPUT EVENTS
// const form = document.forms[0]
// const taskInput = document.getElementById('task')

// taskInput.value = ''

// // form.addEventListener('submit', runEvent)

// // taskInput.addEventListener('keyup', runEvent)
// // taskInput.addEventListener('keydown', runEvent)
// // taskInput.addEventListener('keypress', runEvent)
// taskInput.addEventListener('focus', runEvent)

// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`)
//   // e.preventDefault()
// }
