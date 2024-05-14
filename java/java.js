
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

        // Toggle button starts
        let toggle = document.createElement("label");
        toggle.classList.add("switch");
        toggle.htmlFor = "checkbox"

        let slider = document.createElement("input");
        slider.type = "checkbox";
        slider.id = "checkbox";

        let round = document.createElement("div");
        round.classList.add("slider");
        round.classList.add("round");

        let read = document.createElement("p");
        read.classList.add("straight");
        read.innerHTML = "Have you Read ?";


        toggle.appendChild(slider);
        toggle.appendChild(round);

        // Toggle button ends (This is for organiztional purposes gonna try and implement a function later but for now thatll dew)
        let removeButton = document.createElement("button");
        removeButton.type = "submit"
        removeButton.innerHTML = "Remove";
        // removeButton.innerHTML = "<img src='IMages/Trash-Icon.png'>";
        let para = document.createElement("p");
        let contents = document.getElementById("contents");
        contents.appendChild(para);
        contents.appendChild(read);
        para.innerHTML = `Book: ${title} <br> Author: ${author} `;
        contents.appendChild(toggle);
        contents.appendChild(removeButton);
        

        removeButton.addEventListener("click", (e) => {

  
          e.preventDefault(); 
          para.remove();
          removeButton.remove();
          toggle.remove();
          read.remove();
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




