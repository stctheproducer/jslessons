// INTRO
let val
val = document.all
val = document.forms[0]
val = document.links[0].className

let scripts = document.scripts
Array.from(scripts).forEach((script) => {
  console.log(script.getAttribute('src'))
})

console.log(val)

console.clear()

// SELECTORS
let taskTitle = document.getElementById('task-title')
console.log(taskTitle)
console.log(taskTitle.id)

// taskTitle.style.background = '#333'
// taskTitle.style.color = '#FFF'
taskTitle.style.padding = '5px'
// taskTitle.style.display = 'none'

// taskTitle.textContent = 'Task List'
// taskTitle.innerText = 'My List'
// taskTitle.innerHTML = '<span style="color: red">My List</span>'

console.clear()

console.log(document.querySelector('#task-title'))

console.log(document.querySelector('li:nth-child(4)'))

console.clear()

let items = document.getElementsByClassName('collection-item')
console.log(items)
console.clear()

// DOM Traversal
const list = document.querySelector('ul.collection')
const listItem = document.querySelector('li.collection-item:first-child')

val = listItem
val = list

// Get child nodes
val = list.childNodes

// Get child elements
val = list.children
val = list.children[3].children

// first child
val = list.firstChild
val = list.firstElementChild

// last child
val = list.lastChild
val = list.lastElementChild

// Get parent node
val = listItem.parentNode
val = listItem.parentElement
val = listItem.parentElement.parentElement

// Get next sibling
val = listItem.nextSibling
val = listItem.nextElementSibling
val = listItem.nextElementSibling.nextElementSibling

// Get previous sibling
val = listItem.previousSibling
val = listItem.previousElementSibling

console.clear()

// CREATING ELEMENTS
// let li = document.createElement('li')

// // Add class
// li.className = 'collection-item'

// // Add ID
// li.id = 'new-item'

// // Add attribute
// li.setAttribute('title', 'New Item')

// // Create text node and append
// li.appendChild(document.createTextNode('Hello World'))

// // Create new link element
// const link = document.createElement('a')
// link.className = 'delete-item secondary-content'
// link.innerHTML = `<i class="fa fa-remove"></i>`

// // Append link to li
// li.appendChild(link)

// // Append li as child of ul
// list.appendChild(li)

// console.log(li)

// console.clear()

// REPLACING ELEMENTS
const newHeading = document.createElement('h2')
newHeading.id = 'task-title'
newHeading.appendChild(document.createTextNode('Task List'))

const oldHeading = document.getElementById('task-title')

const cardAction = document.querySelector('.card-action')

cardAction.replaceChild(newHeading, oldHeading)

// REMOVING ELEMENTS
const lis = document.querySelectorAll('li')

// remove list item
lis[0].remove

// remove child
list.removeChild(lis[3])

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child')

const link = firstLi.children[0]

link.classList.add('test')
link.classList.remove('test')

// Attributes
val = link.getAttribute('href')
link.setAttribute('href', 'https://twitter.com')
link.setAttribute('target', '_blank')
val = link.hasAttribute('title')
link.setAttribute('title', 'Google')
link.removeAttribute('title')

console.log(val)
