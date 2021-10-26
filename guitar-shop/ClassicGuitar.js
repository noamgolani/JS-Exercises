export default class ClassicGuitar {
	#id;
	static #currentID = 0;
	manufactureYear;
	brand;
	price;
	used;
	numberOfStrings;
	constructor(
		manufactureYear,
		brand,
		price,
		numberOfStrings = 6,
		used = false
	) {
		this.manufactureYear = manufactureYear;
		this.brand = brand;
		this.price = price;
		this.numberOfStrings = numberOfStrings;
		this.used = used;
		this.#id = ClassicGuitar.#currentID++;
	}

	toString() {
		return `${this.#id}) ${this.used ? "used" : "unused"} ${this.brand} (${
			this.manufactureYear
		}) - ${this.constructor.name} | ${this.price}`;
	}

	get manufactureYear() {
		return this.manufactureYear;
	}

	get brand() {
		return this.brand;
	}

	get id() {
		return this.#id;
	}

	get price() {
		return this.price;
	}

	set price(val) {
		this.price = val;
	}

	play() {
		if (!this.used) {
			this.used = true;
			this.price = 0.9 * this.price;
		}
		return "notes,notes,notes";
	}

	static detectSound(sound) {
		const firstNote = sound.split(',')[0];
		switch(firstNote) {
			case 'guitar': 
				return 'Electric';
			case 'loud_sound':
				return 'Bass';
			case 'note':
				return 'Classic';
			default:
				return 'Not a Guitar';
		}
	}
}
