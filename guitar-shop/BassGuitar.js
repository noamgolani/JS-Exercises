import ClassicGuitar from "./ClassicGuitar.js";
export default class BassGuitar extends ClassicGuitar{
	constructor(manufactureYear, brand, price, used = false) {
		super(manufactureYear, brand, price, 4, used);
	}

	play() {
		return "loud_sound,loud_sound,loud_sound";
	}

	playSolo() {
		let solo = "";
		const notes = [
			"boom",
			"metal",
			"musical_note",
			"loudspeaker",
			"anger",
			"man_dancing",
		];
		for (let i = 0; i < 6; i++) {
			solo += notes[Math.floor(Math.random() * notes.length)] + ' ';
		}
		return solo;
	}
}
