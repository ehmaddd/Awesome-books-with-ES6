import removeList from './modules/remove-list.js';
import navBar from './modules/nav-dynamics.js';
import windowLoad from './modules/window-load.js';
import showTime from './modules/show-time.js';
import dataDisplay from './modules/data-display.js';
import bookAuth from './modules/book-auth.js';

class Library {
  constructor() {
    if (localStorage.length > 0) {
      this.books = JSON.parse(localStorage.getItem('books'));
    } else {
      this.books = [];
    }
  }

  storeLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  addBook() {
    const book = bookAuth();
    if (this.books) {
      this.books.push(book);
    }
  }

  loadLocalStorage() {
    if (localStorage.length > 0) {
      this.books = JSON.parse(localStorage.getItem('books'));
    }
  }

  displayData() {
    removeList();
    dataDisplay(this.books);
  }

  deleteItem(ev) {
    const tgt = ev.target.id;
    if (!Number.isNaN(tgt)) {
      this.books.splice(tgt.id, 1);
      this.storeLocalStorage();
      this.loadLocalStorage();
      this.displayData();
    }
  }

  loadWindow() {
    setTimeout(showTime, 50);
    navBar();
    windowLoad();
    this.loadLocalStorage();
    this.displayData();
  }
}

const library = new Library();

const form = document.querySelector('#book-form');
const bookList = document.querySelector('.book-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  library.addBook();
  library.storeLocalStorage();
  library.displayData();
  form.reset();
});

window.addEventListener('load', () => {
  library.loadWindow();
});

bookList.addEventListener('click', (ev) => {
  library.deleteItem(ev);
});