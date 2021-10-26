import Person from "./Person.js";
export default class GoalKeepr extends Person {
	isLeftHanded;
	lastGoalConceded;
	constructor(name, sureN, sal, age, isLH, lastGC = new Date(Date.now())) {
		super(name, sureN, sal, age);
		this.isLeftHanded = isLH;
		this.lastGoalConceded = lastGC;
	}

	toString() {
		return `Goal Keeper) ${super.toString()} - last Goal Conceded: ${
			this.lastGoalConceded
		} ${this.isLeftHanded ? "Left Handed" : "Right Handed"}`;
	}

	get lastGoalConceded() {
		return this.lastGoalConceded;
	}
	get isLeftHanded() {
		return this.isLeftHanded;
	}

	concededAGoal() {
		this.lastGoalConceded = new Date(Date.now());
		this.salary = +this.salary.replace("$", "") * 0.985 + "$";
	}
}
