document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const form = document.getElementById("myForm");

    const bookDetails = new FormData(form);

    for (const [key, value] of bookDetails.entries()) {
        console.log(`${key}: ${value}`);
    }

    const promise = fetch("https://api.assignment3.rohanhussain.com/books/26100149", {
        method: "POST",
        body: bookDetails,
    })

    promise.then(() => {
        alert("Book has been updated successfully");
    }).catch(() => {
        alert("Error occurred while updating book");
    });
});

const mainDiv = document.getElementById("main");

async function getBooks()
{
    console.log("Getting books");
    const data = await fetch("https://api.assignment3.rohanhussain.com/books/26100149");
    const booksArray = await data.json();


    const books = booksArray.books;

    mainDiv.innerHTML = ''; 

    for (let i = 0; i < books.length; i++)
    {
        const book = books[i];
        const bookDiv = document.createElement("div");
        bookDiv.className = 'book-item';
            bookDiv.innerHTML = `<p><strong>Title:</strong> ${book.title}</p>
                                 <p><strong>Author:</strong> ${book.author}</p>
                                 <p><strong>Price:</strong> ${book.price}</p>`;
        mainDiv.appendChild(bookDiv);
    }
}

getBooks();