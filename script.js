const form = document.getElementById('form');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');

let myLibrary = [];

function Book( name, author, pages, read ) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

myLibrary.push(new Book("Hobbit", 'RR', '300', false));

let add = document.getElementById("add")
add.onclick = function addBook() {
    let title = bookTitle.value.trim();
    let author = bookAuthor.value.trim();
    let pages = bookPages.value.trim();
    let read;

    document.getElementsByName('button-check')
    .forEach(radio => {
        if (radio.checked) {
            if (radio.value == 'yes')
                read = true;
            else
                read = false;

        }
    });
    
    myLibrary.push(new Book(title, author, pages, read));
    console.log(myLibrary);
};