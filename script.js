const myLibrary = [];

function Book(title, author, pages, ifRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    //"read" or "not read yet"
    this.ifRead = ifRead;
    this.info = function() {
        return(`${this.title} by ${this.author}, ${pages} pages, ${ifRead}`);
    }
}

// sample Data
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
const allAboutLove = new Book("All About Love", "Bell Hooks", 240, "read");
const intermezzo = new Book("Intermezzo", "Sally Rooney", 464, "not read yet");

function addBookToLibrary(book, library) {
    // create a book from those arguments
    this.book = new Book(book.title, book.author, book.pages, book.ifRead);
    // store book in array
    library.push(book);
}

addBookToLibrary(theHobbit, myLibrary);
addBookToLibrary(allAboutLove, myLibrary);
addBookToLibrary(intermezzo, myLibrary);
// addBookToLibrary(intermezzo2, myLibrary);
console.log(myLibrary);
// Logic for displaying books + book structures as distinct

// Function that loops through the array, displays each book on the page
// Either table or "card"
// console.table -> we should have an object...?
const libraryContainer = document.querySelector(".library");

function processEachBookEntry(libraryArr) {
    libraryContainer.innerHTML = "";
    // store data in an array?
    libraryArr.map((book, index) => {
        // create a new div for each book
        const card = document.createElement("div");
        card.classList.add("bookCard");
        card.setAttribute("data-index", index);

        // set title as text content
        const title = document.createElement("h3");
        title.textContent = book.title;

        // set author
        const author = document.createElement("p");
        author.textContent = book.author;
        author.style.cssText = "font-style: italic";

        // set number of pages
        const pages = document.createElement("p");
        pages.textContent = book.pages;
        pages.style.cssText = "color: grey;"

        const ifRead = document.createElement("p");
        ifRead.textContent = book.ifRead;

        // create the remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("removeBtn");

        // Add event listener to remove button
        removeButton.addEventListener('click', function() {
            removeBookFromLibrary(index, myLibrary);
            console.log(myLibrary)
        })

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(ifRead);
        card.appendChild(removeButton);

        libraryContainer.appendChild(card);    
    });
}

// Form design
document.querySelectorAll('#fancy-inputs input[type="text"]').forEach((input) => {
    input.addEventListener('blur', function () {
        if (this.value.length > 0) {
            this.classList.add('white');
        } else {
            this.classList.remove('white');
        }
    });
});

// Radio Button - to delete
// document.querySelectorAll("#fancy-radio input[type=radio]").forEach((radio) => {
//     radio.addEventListener("click", () => {
//         // Remove 'selected' class from all labels
//         document.querySelectorAll('label.radio').forEach(label => {
//             label.classList.remove('selected');
//         });

//         const inputID = radio.id;

//         // Check if the radio button is checked and add/remove 'selected' class
//         if (radio.checked) {
//             document.querySelectorAll(`.${inputID}`).forEach(element => {
//                 element.classList.add('selected');
//             });
//         } else {
//             document.querySelectorAll(`.${inputID}`).forEach(element => {
//                 element.classList.remove('selected');
//             });
//         }
//     });
// });

const newBookBtn = document.getElementById("newBookBtn");
const formContainer = document.querySelector(".formContainer");
const newBookForm = document.getElementById("newBookForm");

// Toggle form visibility
newBookBtn.addEventListener("click", () => {
    formContainer.style.display = formContainer.style.display === "none" ? "block" : "none";
});
processEachBookEntry(myLibrary);

// Handle Form Submission
newBookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get form values
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    // const pages = parseInt(document.getElementById("pages").value, 10);
    const pages = document.getElementById("pages").value;
    const ifRead = document.getElementById("ifRead").value;
    console.log("submitted", title, author, pages, ifRead);

    // Add new Book to Library
    addBookToLibrary(new Book(title, author, pages, ifRead), myLibrary);
    // Clear Form
    newBookForm.reset();
    formContainer.style.display="none";
    // processEachBookEntry(myLibrary);
});

function removeBookFromLibrary(index, Arr) {
    Arr.splice(index, 1);
    processEachBookEntry(myLibrary);
}

const removeBtn = document.querySelector(".removeBtn");

// Add event listener to remove button
removeBtn.addEventListener('click', function() {
    removeBookFromLibrary(index, myLibrary);
    console.log(myLibrary)
})

// Dialog Handler

const dialogElem = document.getElementById("dialog");
const closeBtn = document.querySelector(".closeBtn");
showBtn.addEventListener("click", () => {
    dialogElem.showModal();
  });
closeBtn.addEventListener("click", () => {
    dialogElem.close();
});