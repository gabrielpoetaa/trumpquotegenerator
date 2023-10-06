const newQuoteButton = document.querySelector('#js-new-quote');
const quoteLink = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random' 

// function getQuote(){
//   newQuoteButton.innerHTML="Zup";
// }


async function getQuote() {
  // The `try` block executes the statements within it as usual.
  // If an exception is thrown, the statements defined in
  // the `catch` block will be executed.
  // Learn more here: https://javascript.info/try-catch
  try {
    const response = await fetch(quoteLink);
    // If the response is not 200 OK...
    if (!response.ok) {
      // ...throw an error. This causes control flow
      // to skip to the `catch` block below.
      throw Error(response.statusText)
    }

    const json = await response.json();
    console.log(json.message);
    document.querySelector("#js-quote-text").textContent = json.message;

  } catch (err) {
    console.log(err)
    alert('Failed to fetch new quote');
  }
}


// function displayQuote(quote) {
//   const quoteText = document.querySelector('#js-quote-text');
//   quoteText.textContent = quote;
// }


newQuoteButton.addEventListener('click', getQuote);

