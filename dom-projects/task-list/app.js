// Variables
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.task-list')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Load all event listeners
loadEventListeners()

function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask)
  // Remove task event
  taskList.addEventListener('click', removeTask)
  // Clear all tasks event
  clearBtn.addEventListener('click', clearTasks)
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks)
}

// add task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task')
  }

  // Create li element
  const li = document.createElement('li')
  li.className = 'task-item box is-marginless is-radiusless'

  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value))

  // Create new link element
  const link = document.createElement('a')
  link.className = 'delete is-pulled-right has-background-danger'
  li.appendChild(link)

  // Append li to ui
  taskList.appendChild(li)

  // Clear input
  taskInput.value = ''

  e.preventDefault()
}

// Remove task
function removeTask(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.remove()
    }
  }
}

// Clear tasks
function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }
}

// Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase()

  document.querySelectorAll('.task-item').forEach((task) => {
    const item = task.firstChild.textContent
    if (item.toLowerCase().indexOf(text) !== -1) {
      task.style.display = 'block'
    } else {
      task.style.display = 'none'
    }
  })
}
