export default class Cat {
	tiredness = 10;
	hunger = 10;
	lonliness = 10;
	hapinnes = 10;

	constructor(name){
		this.name = name;
	}

	feed(amount = 1){
		if(Math.random() < 0.1) throw new Error("I dont like this food");
		this.hunger += amount;
	}
	sleep(amount = 1){
		if(Math.random() < 0.1) throw new Error("I'm feeling jumpy");
		this.tiredness += amount;
	}
	love(amount = 1){
		if(Math.random() < 0.1) throw new Error("I hate you");
		this.lonliness += lonliness;
	}

	get hungerString(){
		return this.hunger < 7 ? "Hungery" : "Full";
	}

	get tiredString() {
		return this.tiredness < 7 ? "Tired" : "Full with energy";
	} 

	get lonlyString(){
		return this.lonliness < 7 ? "Feeling alone" : "Feeling loved";
	}

	get happyString(){
		return this.hapinnes < 7 ? "Happy" : "Sad";
	}
	toString(){
		return `I'm a cat named: ${this.name} and i feel: ${this.happyString}\n I'm ${this.hungerString}, ${this.tiredString} and ${this.lonlyString}`
	}
}
