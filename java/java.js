const myLibrary = ["The lord of The Flies", "The Last Dance", "How the Grinch Stole Chrsitmas", "Night"];

function Book() {
  // the constructor...
}

function addBookToLibrary(title, pages, author, genre) {
  
    this.title = window.prompt("What is the Title if the book ?");
    this.pages = window.prompt("How many pages does the book have ?");
    this.author = window.prompt("Who is the author of this Book ?");
    this.genre = window.prompt("What is the genre of this book ?");

    this.bookInfo = function() {
        console.log(`Book: ${this.title}, Pages: ${this.pages}, Author: ${this.author}, Genre: ${this.genre}`);
    }
  
}
