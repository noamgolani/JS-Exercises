export default class Person {
	firstName;
	sureName;
	salary;
	age;
	#id;
	static #currentID = 0;

	constructor(fn, sn, sal, age) {
		this.firstName = fn;
		this.sureName = sn;
		this.salary = sal;
		this.age = age;
		this.#id = Person.currentID++;
	}

	get firstName() {
		return this.firstName;
	}
	get sureName() {
		return this.sureName;
	}
	get id() {
		return this.#id;
	}
	get age() {
		return this.age;
	}
	yearPassed() {
		this.age++;
	}
	get salary() {
		return this.salary;
	}
	set salary(val) {
		this.salary = val;
	}

	toString() {
		return `${this.firstName} ${this.sureName} (${this.age}) | ${this.salary}`;
	}
}
