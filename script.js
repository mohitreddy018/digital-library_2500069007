let allBooks = [];

fetch("http://localhost:3000/books")
    .then(response => response.json())
    .then(data => {
        allBooks = data;
        displayBooks(allBooks);
    });

function displayBooks(books) {
    let output = "";

    books.forEach(book => {
        output += `
            <div class="book">
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Category: ${book.category}</p>
            </div>`;
    });

    document.getElementById("books").innerHTML =
        output || "No books found";
}

function searchBooks() {
    let text = document.getElementById("search")
        .value.toLowerCase();

    let category = document.getElementById("category").value;

    let result = allBooks.filter(book =>
        (book.title.toLowerCase().includes(text) ||
         book.author.toLowerCase().includes(text) ||
         book.category.toLowerCase().includes(text)) &&
        (category === "" || book.category === category)
    );

    displayBooks(result);
}

document.getElementById("search")
    .addEventListener("input", searchBooks);

document.getElementById("category")
    .addEventListener("change", searchBooks);