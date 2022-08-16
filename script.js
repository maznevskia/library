const form = document.getElementById('form');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const books = document.getElementById('books');

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

    let copy = 0;
    
    for (let i = 0; i < myLibrary.length; i++) {
        if (title == myLibrary[i].name && author == myLibrary[i].author) {
            copy = 1;
        }
    }
    
    if (!title || !author || !pages || read == undefined) {
        console.log("All Fields must be complete");
    }

    else if(copy==1){
        console.log('That Book Already Exists');
    }

    else{
        myLibrary.push(new Book(title, author, pages, read));

        const inputs = document.querySelectorAll('#title, #author, #pages')
        inputs.forEach(input => {
            input.value = '';
        });

        document.querySelector('input[name="button-check"]:checked').checked = false;

    }

    console.log(myLibrary);

    function displayBooks() {

        books.innerHTML = '';

        for (let i = 0; i < myLibrary.length; i++) {
            let book = document.createElement("div");
            book.className = 'book';
            books.appendChild(book);

            let tit = document.createElement("p");
            tit.innerText = myLibrary[i].name;
            book.appendChild(tit);

            let aut = document.createElement("p");
            aut.innerText = myLibrary[i].author;
            book.appendChild(aut);
            
            let pag = document.createElement("p");
            let txt = `${myLibrary[i].pages} Pages`
            pag.innerText = txt;
            book.appendChild(pag);
            
            let red = document.createElement("button");
            if (myLibrary[i].read == true){
                red.innerText = 'Read';
                red.classList.add('read');
            }
            else {
                red.innerText = 'Not Read';
                red.classList.add('notRead');
            }
            book.appendChild(red);
            
            let rem = document.createElement("button");
            rem.id = 'remove';
            rem.innerText = 'Remove';
            book.appendChild(rem);
        }
    }

    displayBooks();
};