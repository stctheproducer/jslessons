document.querySelector('.get-jokes').addEventListener('click', getJokes)

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value

  const xhr = new XMLHttpRequest()

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`)

  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText)

      let output = ''

      if (response.type === 'success') {
        response.value.forEach((joke) => {
          output += `
          <li>${joke.joke}</li>
        `
        })
      } else {
        output += `Something went wrong...`
      }

      document.querySelector('.jokes').innerHTML = output
      document.querySelector('input[type="number"]').value = ''
    }
  }

  xhr.send()

  e.preventDefault()
}
