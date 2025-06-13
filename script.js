const wordInput = document.querySelector("#word");
const btnCheck = document.querySelector("#btnCheck");
const result = document.querySelector("#result");

function checkPalindrome() {
    const word = wordInput.value;
    const invertedWord = word.split("").reverse().join("");
    // Check if the word is a palindrome:
    if (word.toLowerCase() === invertedWord.toLowerCase()) {
        result.textContent = `The word "${word}" is palindrome!`;
    } else {
        result.textContent = `The word "${word}" is not a palindrome!`;
    };
}

btnCheck.addEventListener("click", checkPalindrome);