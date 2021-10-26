import Person from "./Person.js";
export default class Player extends Person {
	strongLeg;
	position;
	celebrationSentence;
	constructor(name, sureN, sal, age, strongLeg, position, celebrationSentence) {
		super(name, sureN, sal, age);
		this.strongLeg = strongLeg;
		this.position = position;
		this.celebrationSentence = celebrationSentence;
	}

	toString() {
		return `Player) ${super.toString()} - ${this.position} : ${
			this.strongLeg
		} Legged`;
	}

	get celebrationSentence() {
		return this.celebrationSentence;
	}

	set celebrationSentence(val) {
		this.celebrationSentence = val;
	}

	get position() {
		return this.position;
	}

	set position(val) {
		this.position = val;
	}

	get strongLeg() {
		return this.strongLeg;
	}

	goalCelebration() {
		this.salary = +this.salary.replace("$", "") * 1.025 + "$";
		console.log(this.celebrationSentence);
	}
}
