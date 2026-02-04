// .home-icon {
//     position: fixed;
//     top: 20px;
//     right: 50px;
//     font-size: 22px;
//     background: #0b3c5d;
//     color: white;
//     padding: 10px;
//     border-radius: 50%;
//     text-decoration: none;
// }


.home-button {
    position: fixed;
    top: 20px;
    left: 20px;
    background: #0b3c5d;
    color: white;
    padding: 10px 16px;
    text-decoration: none;
    font-weight: 500;
    border-radius: 4px;
    z-index: 1000;
}

.home-button:hover {
    background: #072a42;
}




function advancedSearch() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();
    const type = document.getElementById("searchType").value;
    const rows = document.querySelectorAll(".book-row");
    const noResult = document.getElementById("noResult");

    let found = false;

    rows.forEach(row => {
        const title = row.dataset.title.toLowerCase();
        const author = row.dataset.author.toLowerCase();
        const genre = row.dataset.genre.toLowerCase();

        let match = false;

        if (type === "all") {
            match = title.includes(keyword) ||
                    author.includes(keyword) ||
                    genre.includes(keyword);
        } else if (type === "title") {
            match = title.includes(keyword);
        } else if (type === "author") {
            match = author.includes(keyword);
        } else if (type === "genre") {
            match = genre.includes(keyword);
        }

        row.style.display = match ? "" : "none";
        if (match) found = true;
    });

    noResult.style.display = found ? "none" : "block";
}
