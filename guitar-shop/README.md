# [main JS](./index.js)
## [ClassisGuitar JS](./ClassicGuitar.js) [ElectricGuitar JS](./ElectricGuitar.js) [BassGuitar JS](./BassGuitar.js) 


# Assignment

## Follow the requirements and implement the class ClassicGuitar:

### Should have the following properties:

  -	 manufactureYear number
  -	brand string
	- price number
 	- numberOfString number (defaults to 6)
 	- used (initialized to false)
 	- id (private property)

### Should have constructor and the following methods:

   - play(): string ("notesnotesnotes"). A guitar once played, becomes used and it's price drops by 10%
   - getters and setters for price
   - only getters for

   - ManufactureYear
   - brand
   - id

   - a static method: detectSound(sound: string): string - returns the instrument type ("ElectricGuitar", "BassGuitar") Example: console.log(ClassicGuitar.detectSound("guitar")); // "ElectricGuitar" console.log(ClassicGuitar.detectSound("loud_sound")); // "BassGuitar"

### Extend ClassicGuitar and create 2 sub-classes:
