function deleteTweet(e) {
    const clickedButton = e.target;
    clickedButton.parentElement.remove();
}

function tweetHandler() {
    const newTweetInput = document.getElementById("new-tweet-input");
    const newTweet = newTweetInput.value.trim();

    const newListItem = document.createElement("li");
    newListItem.innerText = newTweet;
    newListItem.classList = "list-group-item d-flex justify-content-between align-items-center";

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Remove Tweet";
    deleteButton.classList = "btn btn-danger btn-sm delete-button";
    deleteButton.addEventListener("click", deleteTweet);
    newListItem.appendChild(deleteButton);

    const tweetList = document.getElementById("tweet-list");
    tweetList.insertBefore(newListItem, tweetList.firstChild);

    newTweetInput.value = "";
}

const tweetButton = document.getElementById("tweet-btn");
tweetButton.addEventListener("click", tweetHandler);

const arrayofDeleteButtons = document.getElementsByClassName("delete-button");
for (let i = 0; i < arrayofDeleteButtons.length; i++) {
    arrayofDeleteButtons[i].addEventListener("click", deleteTweet);
}
