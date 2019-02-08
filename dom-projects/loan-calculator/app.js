const progress = document.querySelector('progress')
const loading = document.querySelector('#loading')
const results = document.querySelector('#results')

// Progress bar
let int
let i = 0

function start() {
  int = setInterval(increase, 15)
}

function increase() {
  if (i < 100) {
    i++
    progress.value = i
  } else {
    clearInterval(int)
    calculateResults()
  }
}

document.getElementById('loan-form').addEventListener('submit', (e) => {
  results.style.display = 'none'
  loading.style.display = 'block'
  start()
  e.preventDefault()
})

// Calculate results
function calculateResults() {
  // UI vars
  const amount = document.getElementById('amount')
  const interest = document.getElementById('interest')
  const years = document.getElementById('years')
  const monthlyPayment = document.getElementById('monthly-payment')
  const totalPayment = document.getElementById('total-payment')
  const totalInterest = document.getElementById('total-interest')

  const principal = parseFloat(amount.value)
  const calculatedInterest = parseFloat(interest.value) / 100 / 12
  const calculatedPayments = parseFloat(years.value) * 12

  // Compute monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments)
  const monthly = (principal * x * calculatedInterest) / (x - 1)

  if (isFinite(monthly)) {
    progress.classList.add('is-success')
    monthlyPayment.value = monthly.toFixed(2)
    totalPayment.value = (monthly * calculatedPayments).toFixed(2)
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2)
    setTimeout(() => {
      loading.style.display = 'none'
      i = 0
      progress.classList.remove('is-success')
      results.style.display = 'block'
    }, 500)
  } else {
    setTimeout(() => {
      progress.classList.add('is-danger')
      showErrors('Please check your numbers')
    }, 500)
  }
}

function showErrors(error) {
  // Get elements
  const box = document.querySelector('.box')
  const heading = document.querySelector('h3.title')

  const errorDiv = document.createElement('div')
  errorDiv.className = 'notification is-danger has-text-centered'
  errorDiv.appendChild(document.createTextNode(error))

  // insert error above heading
  box.insertBefore(errorDiv, heading)

  // clear error after 3 seconds
  setTimeout(clearError, 3000)
}

// clear error
function clearError() {
  loading.style.display = 'none'
  i = 0
  progress.classList.remove('is-danger')
  document.querySelector('.notification').remove()
}
