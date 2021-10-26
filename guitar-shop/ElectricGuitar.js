import ClassicGuitar from "./ClassicGuitar.js";
export default class ElectricGuitar extends ClassicGuitar {
	constructor(manufacturYear, brand, price, longNeck, used = false) {
		super(manufacturYear, brand, price, 6, used);
		this.longNeck = longNeck;
	}

	play() {
		return "guitar,guitar,guitar";
	}
}
