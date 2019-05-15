class Book {
  constructor(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}

class UI {
  addBookToList(book) {
    // Element variables
    const list = document.getElementById('book-list'),
      row = document.createElement('tr')

    // insert book into table
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
    `
    // add book to UI
    list.appendChild(row)
  }

  showAlert(message, className) {
    // Element variables
    const div = document.createElement('div'),
      container = document.querySelector('.container'),
      form = document.querySelector('#book-form')

    // add class to div
    div.className = `alert ${className}`

    // add message to div
    div.appendChild(document.createTextNode(message))

    // insert div before the form
    container.insertBefore(div, form)

    // remove div after 3 seconds
    setTimeout(() => {
      document.querySelector('.alert').remove()
    }, 3000)
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove()
    }
  }

  clearFields() {
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''
  }
}

// Event Listener to add book
document.getElementById('book-form').addEventListener('submit', (e) => {
  // Get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value

  // Instantiate book
  const book = new Book(title, author, isbn)

  // Instantiate UI
  const ui = new UI()

  // Validate
  if (title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error')
  } else {
    // Add book to list
    ui.addBookToList(book)

    // Show success
    ui.showAlert('Book added!', 'success')

    // Clear fields
    ui.clearFields()
  }

  e.preventDefault()
})

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', (e) => {
  // instantiate UI
  const ui = new UI()

  // Delete book
  ui.deleteBook(e.target)

  // Show message
  ui.showAlert('Book removed!', 'success')

  e.preventDefault()
})
