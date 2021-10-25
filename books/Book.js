export default class Book {
	constructor(title, genre, author, read, readDate = null){
		this.title = title;
		this.genre = genre;
		this.author = author;
		this.read = read;
		this.readDate = readDate;
	}	

	toString(){
		const howManyLines = 40 - (this.title.length + this.author.length);
		return `Book ${this.title} | ${this.author} ${'-'.repeat(howManyLines)} ${this.genre}`
	}

	print(){
		console.log(this.toString())
	}
}
