
const myLibrary = [];


function Book() {
  // the constructor...
}

function addBookToLibrary(title, author, pages, genre) {
  
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;

    this.bookInfo = function() {
      console.log(this.title, this.author, this.pages, this.genre);
        myLibrary.push(this.title);

        let para = document.createElement("p");
        let contents = document.getElementById("contents");
        contents.appendChild(para);
        para.innerHTML = `Book: ${this.title}`;


    
    }

  
}


// Buttons

const dialog = document.getElementById("showDialog");
const display = document.getElementById("displayDialog")
const closeButton = document.querySelector("close");

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




