// Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3

// UI Elements
const gameWrapper = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message')

// Assign UI min and max
minNum.textContent = min
maxNum.textContent = max

// Play again event listener
gameWrapper.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('play-again')) {
    window.location.reload()
  }
})

// Listen for guess
guessBtn.addEventListener('click', () => {
  let guess = parseInt(guessInput.value)

  // validate input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  }

  // Check if won
  if (guess === winningNum) {
    // Game over - won
    gameOver(true, `${winningNum} is correct, you win!`, 'green')
  } else {
    // Guesses left
    guessesLeft -= 1

    if (guessesLeft === 0) {
      // Game over - lost
      gameOver(
        false,
        `Game over, you lost.The correct number was ${winningNum}.`,
      )
    } else {
      // Game continues - answer wrong

      // Change border color
      guessInput.style.borderColor = 'orange'

      // Clear input
      guessInput.value = ''

      // set message to inform the user
      setMessage(
        `${guess} is not correct. ${guessesLeft} guesses left.`,
        'orange',
      )
    }
  }
})

// Game over
function gameOver(won, msg) {
  let color
  won === true ? (color = 'green') : (color = 'red')

  // Disable input
  guessInput.disabled = true
  // Change border color
  guessInput.style.borderColor = color
  // set text color
  message.style.color = color
  // set message
  setMessage(msg)

  // Play again?
  guessBtn.value = 'Play Again'
  guessBtn.className += 'play-again'
}

// Get the winning number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Set the response message
function setMessage(msg, color) {
  message.style.color = color
  message.textContent = msg
}
