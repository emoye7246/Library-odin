
const myLibrary = [];


function Book() {
  // the constructor...
}

function addBookToLibrary(title, author, pages, genre, summary) {
  
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.summary = summary;


    this.bookInfo = function() {
      const library = myLibrary;
      console.log(title, author, pages, genre, summary);
        library.push(title);
        
        
    }
}

const kobe = new addBookToLibrary('Muse', 'Kobe Bryant', '200 pages', 'Documentary');
console.log(kobe.bookInfo());


// UserInput

function UserInput() {
let inputTitle = document.getElementById("title").value;
let inputAuthor = document.getElementById("author").value;
let inputPages = document.getElementById("pages").value; 
let inputGenre = document.getElementById("genre").value;

let user = new addBookToLibrary(inputTitle, inputAuthor, inputPages, inputGenre);
console.log(user.bookInfo());

// Display contents of adding a new book will start here 

let group = document.getElementById("display");
let showBook = document.createElement("p");
showBook.id = "showBook";
showBook.innerHTML = `Book: ${inputTitle} <br> Author: ${inputAuthor};`
group.appendChild(showBook);

let removeButton = document.createElement("button");
removeButton.type = "button";
removeButton.innerHTML = "Remove";
showBook.appendChild(removeButton);

removeButton.addEventListener("click" , (e) => {

  showBook.remove();
  removeButton.remove();
  e.preventDefault();

})


}

// Buttons

const dialog = document.getElementById("showDialog");
const display = document.getElementById("displayDialog")
const closeButton = document.querySelector("#close");

dialog.addEventListener("click", () => {

display.showModal();

});

closeButton.addEventListener("click", (e) => {

  e.preventDefault();
  display.close();
})






let submit = document.getElementById("submit");

submit.addEventListener("click", buttonClick, false);

function buttonClick(event) {
  event.preventDefault();
}




