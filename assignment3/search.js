const mainDiv = document.getElementById("main");

async function searchBooks()
{
    const form = document.getElementById("myBooks");

    const bookDetails = new FormData(form);

    const firstEntry = bookDetails.entries().next().value;
    const [key, value] = firstEntry;

    console.log(value);


    const data = await fetch("https://api.assignment3.rohanhussain.com/books/search/26100149?query="+ value);
    const searchresultArray = await data.json();


    const searchResults = searchresultArray.books;
    console.log(searchResults);

    mainDiv.innerHTML = '';

    for (let i = 0; i < searchResults.length; i++)
    {
        const singleSearchResult = searchResults[i];
        const bookDiv = document.createElement("div");
        bookDiv.className = 'book-item';
            bookDiv.innerHTML = `<p><strong>Title:</strong> ${singleSearchResult.title}</p>
                                 <p><strong>Author:</strong> ${singleSearchResult.author}</p>
                                 <p><strong>Price:</strong> ${singleSearchResult.price}</p>`;
        mainDiv.appendChild(bookDiv);
    }
}