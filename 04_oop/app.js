class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

const mary = new Person('Mary', 'Williams')

console.log(mary.firstName, mary.lastName)
