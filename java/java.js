
const myLibrary = [];


function Book() {
  // the constructor...
}

function addBookToLibrary(title, author, pages, genre, read) {
  
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.read = read;


    this.bookInfo = function() {
      const library = myLibrary;
      console.log(title, author, pages, genre, read);
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
// Remove button elements
let removeButton = document.createElement("button");
removeButton.type = "button";
removeButton.innerHTML = "Remove";
showBook.appendChild(removeButton);
removeButton.addEventListener("click" , (e) => {

  showBook.remove();
  removeButton.remove();
  e.preventDefault();
})
// Have read button 
let choice = document.createElement("div");
let question = document.createElement("p");
question.innerHTML = "Have you finished this book";
let yesButton = document.createElement("button");
yesButton.id = "yesBtn";
yesButton.type = "button";
yesButton.innerHTML = "Yes";
let noButton = document.createElement("button");
noButton.id = "noBtn";
noButton.type = "button";
noButton.innerHTML = "No";
choice.appendChild(question);
choice.appendChild(yesButton);
choice.appendChild(noButton);
showBook.appendChild(choice);

yesButton.addEventListener("click", () => {
  if(yesButton.innerHTML === "Yes"){
    yesButton.innerHTML = "Completed"
    yesButton.style.backgroundColor = "green";
    noButton.style.backgroundColor = "white";
    noButton.innerHTML = "No";
  }
  else {
    yesButton.innerHTML = "Yes"
    yesButton.style.backgroundColor = "white";
    noButton.style.backgroundColor = "white";
    noButton.innerHTML = "No";
  }
})
 noButton.addEventListener("click", () => {
  if(noButton.innerHTML === "No"){
    noButton.innerHTML = "Not Finished";
    noButton.style.backgroundColor = "red";
    yesButton.innerHTML = "Yes";
    yesButton.style.backgroundColor = "white";
  }
  else {
    noButton.innerHTML = "No";
    noButton.style.backgroundColor = "white";
    yesButton.innerHTML = "Yes";
    yesButton.style.backgroundColor = "white";
  }
 })

}
// Were gonna have some fun with this one 
// Update Books read 
// Books Summary

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




