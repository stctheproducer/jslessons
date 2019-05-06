document.getElementById('button').addEventListener('click', loadData)

function loadData() {
  // Create XHR Object
  const xhr = new XMLHttpRequest()

  // Open
  xhr.open('GET', 'data.txt', true)

  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText)
    }
  }

  xhr.send()
}

// readyState values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// HTTP Statuses
// 200: 'OK'
// 403: 'Forbidden'
// 404: 'Not Found'
