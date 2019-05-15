// const sayHello = function() {
//   console.log('Hello')
// }

// const sayHello = () => {
//   console.log('Hello')
// }

// One line function does not need braces
// const sayHello = () => console.log('Hello')

// One line returns
// const sayHello = () => 'Returned text'

// One line returns for object literals
// const sayHello = () => ({ msg: 'Hello' })

// console.log(sayHello())

// const sayHello = (name) => console.log(`Hello ${name}`)

// sayHello('Chanda')

const users = ['Nathan', 'John', 'Willian', 'AJ']

// const nameLengths = users.map(function(name) {
//   return name.length
// })

// const nameLengths = users.map((name) => {
//   return name.length
// })

const nameLengths = users.map((name) => name.length)

console.log(nameLengths)
