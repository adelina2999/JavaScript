//constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

//instantiate object
const person1 = new Person('John', 'Doe', '1980-04-03');
const person2 = new Person('Mary', 'Smith', '1970-01-01');

console.log(person1)
console.log(person2.getFullName())
