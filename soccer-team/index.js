import Person from "./Person.js";
import GoalKeepr from "./GoalKeepr.js";
import Player from "./Player.js";

const p = new Person("Noam", "Golani", "0$", 23);
const pl = new Player("Tom", "Golani", "120$", 23, "Right", "Center", "Yay");
const gk = new GoalKeepr("Yakir", "Nahman", "324$", 30, false);
pl.celebrationSentence = "YAY!";

console.log(p.toString());
p.yearPassed();
console.log(p.toString());

console.log(pl.toString());
pl.goalCelebration();
console.log(pl.toString());

console.log(gk.toString());
setTimeout(() => {
	gk.concededAGoal();
	console.log(gk.toString());
}, 300);
