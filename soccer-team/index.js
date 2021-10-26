import Person from './Person.js'

const p = new Person('Noam','Golani', '0$',23);
console.log(p.toString())
p.yearPassed();
console.log(p.toString())

