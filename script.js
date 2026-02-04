// Reserved for future enhancements
console.log("National Digital Library System Loaded");
function searchBooks() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const books = document.getElementsByClassName("book-item");

    for (let i = 0; i < books.length; i++) {
        const title = books[i].dataset.title.toLowerCase();
        const author = books[i].dataset.author.toLowerCase();
        const genre = books[i].dataset.genre.toLowerCase();

        if (
            title.includes(input) ||
            author.includes(input) ||
            genre.includes(input)
        ) {
            books[i].style.display = "block";
        } else {
            books[i].style.display = "none";
        }
    }
}
