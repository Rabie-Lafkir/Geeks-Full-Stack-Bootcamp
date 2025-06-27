const allBooks = [
    {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        image: "https://m.media-amazon.com/images/I/41as+WafrFL._AC_SY580_.jpg",
        alreadyRead: true
    },
    {
        title: "Clean Code",
        author: "Robert Martin",
        image: "https://m.media-amazon.com/images/I/41xShlnTZTL._AC_SY580_.jpg",
        alreadyRead: false
    }
];

const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
    const div = document.createElement("div");
    div.innerHTML = `${book.title} written by ${book.author} <br>
    <img src="${book.image}" width="100">`;
    if (book.alreadyRead) {
        div.style.color = "red";
    }
    section.appendChild(div);
});
