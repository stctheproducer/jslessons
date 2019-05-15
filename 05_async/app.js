document.getElementById('button').addEventListener('click', loadData)
document.getElementById('button1').addEventListener('click', loadCustomer)
document.getElementById('button2').addEventListener('click', loadCustomers)

function loadData() {
  // Create XHR Object
  const xhr = new XMLHttpRequest()

  // Open
  xhr.open('GET', 'data.txt', true)

  xhr.onprogress = function() {
    console.log('READYSTATE', xhr.readyState)
  }

  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText)
      document.getElementById('output').innerHTML = `<h4>${
        this.responseText
      }</h4>`
    }
  }

  xhr.onerror = function() {
    console.log('Request error...')
  }

  xhr.send()
}

function loadCustomer() {
  const xhr = new XMLHttpRequest()

  xhr.open('GET', 'customer.json', true)

  xhr.onload = function() {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText)

      const output = `
        <ul>
          <li>${customer.id}</li>
          <li>${customer.name}</li>
          <li>${customer.address}</li>
        </ul>
      `
      document.getElementById('customer').innerHTML = output
    }
  }

  xhr.send()
}

function loadCustomers() {
  const xhr = new XMLHttpRequest()

  xhr.open('GET', 'customers.json', true)

  xhr.onload = function() {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText)

      let output = ''

      customers.forEach((customer) => {
        output += `
          <ul>
            <li>${customer.id}</li>
            <li>${customer.name}</li>
            <li>${customer.address}</li>
          </ul>
        `
      })
      document.getElementById('customers').innerHTML = output
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
