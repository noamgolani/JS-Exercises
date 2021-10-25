import BookList from './BookList.js';
import Book from './Book.js';

const booklist = new BookList([
	new Book('Title 1', 'genre 1', 'Author', false),
	new Book('Title 2', 'genre 2', 'Author 5', true, new Date(Date.now())),
	new Book('Title 3', 'genre 1', 'Author 2', false),
	new Book('Title 4', 'genre 2', 'Author', false),
	new Book('Title 5', 'genre 4', 'Author 2', true,new Date(Date.now())),
]);

booklist.print();
booklist.printStatus();

booklist.finishCurrentBook();

booklist.printStatus();
