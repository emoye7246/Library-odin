
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
      console.log(title, author, pages, genre, summary);
        myLibrary.push(title);


        let removeButton = document.createElement("button");
        removeButton.type = "submit"
        removeButton.innerHTML = "Remove";
        let para = document.createElement("p");
        let contents = document.getElementById("contents");
        contents.appendChild(para);
        para.innerHTML = `Book: ${title} <br> Author: ${author}`;
        contents.appendChild(removeButton);

        removeButton.addEventListener("click", (e) => {

  
          e.preventDefault(); 
          para.remove();
          removeButton.remove();
        })
        
        
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




