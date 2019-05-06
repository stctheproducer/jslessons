let counter1,
  counter2,
  winCount,
  initialValue,
  initialValue1,
  initialValue2,
  currentValue,
  dummyArray

// dummyArray = [[1, 0, 0], [1, 1, 1], [0, 1, 1]]

function checkWinHorizontal(myArray) {
  counter1 = 0
  while (counter1 < 3) {
    counter2 = 0
    winCount = 0
    while (counter2 < 3) {
      initialValue = myArray[counter1][0]
      currentValue = myArray[counter1][counter2]
      if (initialValue === currentValue) {
        winCount = winCount + 1
        counter2 = counter2 + 1
      } else {
        counter2 = counter2 + 1
        continue
      }
    }
    if (winCount === 3) {
      break
    }
    counter1 = counter1 + 1
  }
  if (winCount === 3) {
    return true
  } else {
    return false
  }
}

function checkWinVertical(myArray) {
  counter1 = 0
  while (counter1 < 3) {
    counter2 = 0
    winCount = 0
    while (counter2 < 3) {
      initialValue = myArray[0][counter1]
      currentValue = myArray[counter2][counter1]
      if (initialValue === currentValue) {
        winCount = winCount + 1
        counter2 = counter2 + 1
      } else {
        counter2 = counter2 + 1
        continue
      }
    }
    if (winCount === 3) {
      break
    }
    counter1 = counter1 + 1
  }
  if (winCount === 3) {
    return true
  } else {
    return false
  }
}

function checkWinDiagonal(myArray) {
  initialValue1 = myArray[0][0]
  initialValue2 = myArray[2][0]
  if (myArray[1][1] === initialValue1 && myArray[2][2] === initialValue1) {
    return true
  } else if (
    myArray[1][1] === initialValue2 &&
    myArray[0][2] === initialValue2
  ) {
    return true
  } else {
    return false
  }
}

dummyArray = [
  [1, 0, 1],
  [1, 1, 0],
  [0, 1, 0]
]

if (checkWinHorizontal(dummyArray)) {
  console.log(`Win in horizontal`)
} else if (checkWinVertical(dummyArray)) {
  console.log(`Win in vertical`)
} else if (checkWinDiagonal(dummyArray)) {
  console.log(`Win in diagonal`)
} else {
  console.log(`The game was a draw`)
}
