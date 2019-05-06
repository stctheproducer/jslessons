let val

val = '100.8'
const firstName = 'Chanda'
const lastName = 'Mulenga'

console.log(parseFloat(val))
console.log(firstName.concat(' ', lastName, ' Jr.'))

const html = `
<p>
	Hello! My name is ${firstName} and I'll be turning a certain age this year! \u{1F680}
</p>`

const node = document.createElement('div')
node.innerHTML = html

document.body.appendChild(node)

const numbers = [2, 15, 125, 47, 85, 888, 8956, 45]

val = numbers.sort((x, y) => {
  return y - x
})

const today = new Date()
const mutatedDate = today.toLocaleString('en-ZM')

val = today.toTimeString()
val = mutatedDate

console.clear()
console.log(today)
console.log(val)

function greet(firstName = 'John', lastName = 'Doe') {
  return `Hello ${firstName} ${lastName}`
}

console.log(greet())

console.clear()

val = window.navigator.language

console.log(val)

let chanda = String.toString(5)
console.log(chanda)
