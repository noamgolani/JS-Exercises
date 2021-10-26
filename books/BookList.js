export default class BookList {
	constructor(books, currentIndex = 0) {
		this.books = books;
		this.currentIndex = 0;
	}

	add(book) {
		this.books.push(book);
	}

	finishCurrentBook() {
		this.current.read = true;
		this.current.readDate = new Date(Date.now());
		this.currentIndex = this.nextIndex;
	}

	get current() {
		return this.books[this.currentIndex];
	}

	get lastIndex() {
		let index = this.currentIndex - 1;
		while (index >= 0) {
			if (this.books[index].read) return index;
		}
		return -1; // no "Last Readed"
	}

	get gast() {
		return this.books[this.lastIndex];
	}

	get nextIndex() {
		let index = this.currentIndex + 1;
		while (!this.books[index].read) {
			index++;
		}
		return index;
	}

	get next() {
		return this.books[this.nextIndex];
	}

	get read() {
		return this.books.filter((book) => book.read).length;
	}

	get notRead() {
		return this.books.filter((book) => !book.read).length;
	}

	printStatus() {
		console.log({
			current: this.current.toString(),
			next: this.next.toString(),
			last: this.last?.toString(),
			read: this.read,
			"not read": this.notRead,
		});
	}

	print() {
		this.books.forEach((book) => {
			book.print();
		});
	}
}
