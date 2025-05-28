//A random quote machine in footer
import React, { useState } from 'react';

// A sample list of quotes. This array can later be replaced by data from an API.
const quotes = [
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
];

function QuoteMachine() {
  function getRandomQuoteAndRemove(array) {
    const copy = [...array]; // Create a shallow copy of the array
    const randomIndex = Math.floor(Math.random() * copy.length); // Get a random index
    const selected = copy[randomIndex]; // Select the quote at that index
    copy.splice(randomIndex, 1); // Remove the selected quote from the copy
    return { selected, remaining: copy }; // Return the selected quote and the remaining quotes
  }

  const initial = getRandomQuoteAndRemove(quotes); // Get the first random quote and the remaining quotes
  const [currentQuote, setCurrentQuote] = useState(initial.selected);
  const [unusedQuotes, setUnusedQuotes] = useState(initial.remaining);
  const [fade, setFade] = useState(true);

  // Update the quote (currentQuote) when the user clicks the button
  const handleNewQuote = () => {
    // Fade out the text.
    setFade(false);

    // Wait 500ms for the fade-out animation to complete.
    setTimeout(() => {
      // Use the current unusedQuotes array, or reset to a full copy if all quotes have been used.
      let availableQuotes = unusedQuotes.length ? unusedQuotes : [...quotes];
      const { selected, remaining } = getRandomQuoteAndRemove(availableQuotes);
      setCurrentQuote(selected);
      setUnusedQuotes(remaining);

      // Fade the text back in.
      setFade(true);
    }, 500); // 500ms delay for the fade-out animation
  };

  return (
    // Wrapper element with id="quote-box" (User Story #1)
    <div className="relative bg-slate-950 w-full p-2 z-50 border-t-4 border-orange-800" id="quote-box-wrapper">
      <div className="relative bg-slate-950 max-w-md w-full justify-center text-center p-1 mx-auto my-1 z-50" id="quote-box">
        {/* Element with id="text" displays the quote (User Stories #2 and #6) */}
        <p
          id="text"
          className={`text-2xl text-white mb-1 text-center transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
        >
          {currentQuote.text}
        </p>
        {/* Element with id="author" displays the quote's author (User Stories #3 and #7) */}
        <p id="author" className="text-right text-white italic mb-1">
          - {currentQuote.author}
        </p>
        <div className="flex justify-between">
          {/* Clickable element with id="new-quote" updates the quote (User Stories #4, #8, and #9) */}
          <button
            id="new-quote"
            onClick={handleNewQuote}
            className="bg-gray-800 text-white py-1 px-4 rounded mr-2 hover:bg-gray-700 transition-colors"
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuoteMachine;