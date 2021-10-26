import BassGuitar from './BassGuitar.js';
import ElectricGuitar from './ElectricGuitar.js';

const bass = new BassGuitar(2000, 'Fender', '12,321$');
const electric1 = new ElectricGuitar(1930, 'Gibson', '1,034$');
const electric = new ElectricGuitar(1930, 'Gibson', '1,034$');
console.log(bass.toString())
console.log(electric.toString())

