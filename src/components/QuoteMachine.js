//A random quote machine in footer
import React, { useState, useEffect, useCallback } from 'react';

// A sample list of quotes. This array can later be replaced by data from an API.
const quotes = [
  { text: "Even the greatest was once a beginner. Don’t be afraid to take that first step.", author: "Muhammad Ali" },
  { text: "Be willing to be a beginner every single morning.", author: "Meister Eckhart" },
  { text: "The first step towards getting somewhere is to decide you’re not going to stay where you are.", author: "J.P. Morgan" },
  { text: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.", author: "Steve Jobs" },
  { text: "You are never too old to start over. Every day is a chance to make changes to create the life we want.", author: "Karon Waddell" },
  { text: "Find a job you enjoy doing, and you will never have to work a day in your life.", author: "Chinonye J. Chidolue" },
  { text: "Success is the sum of small efforts, repeated day-in and day-out.", author: "Robert Collier" },
  
];

function QuoteMachine() {
  // Returns a random quote and the remaining quotes from the given array.
  function getRandomQuoteAndRemove(array) {
    const copy = [...array];
    const randomIndex = Math.floor(Math.random() * copy.length);
    const selected = copy[randomIndex];
    copy.splice(randomIndex, 1);
    return { selected, remaining: copy };
  }

  // Initialize state with one random quote and the rest in "unusedQuotes"
  const initial = getRandomQuoteAndRemove(quotes);
  const [currentQuote, setCurrentQuote] = useState(initial.selected);
  const [unusedQuotes, setUnusedQuotes] = useState(initial.remaining);
  const [fade, setFade] = useState(true);

  // Memoized function to update the quote.
  const handleNewQuote = useCallback(() => {
    // Fade out the text.
    setFade(false);
    setTimeout(() => {
      let availableQuotes;
      // If there are still unused quotes, pick from them.
      if (unusedQuotes.length > 0) {
        availableQuotes = unusedQuotes;
      } else {
        // When unusedQuotes is empty, reset the pool.
        // Filter out the current quote (if possible) to prevent an immediate repeat.
        availableQuotes = quotes.length > 1 
          ? quotes.filter(q => q.text !== currentQuote.text) 
          : [...quotes];
      }
      const { selected, remaining } = getRandomQuoteAndRemove(availableQuotes);
      setCurrentQuote(selected);
      setUnusedQuotes(remaining);
      // Fade the text back in.
      setFade(true);
    }, 700); // 500ms delay for fade-out/fade-in transition
  }, [unusedQuotes, currentQuote]);

  // Automatically change the quote every 5 seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      handleNewQuote();
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(interval);
  }, [handleNewQuote]);

   return (
    // Quote Machine wrapper
    <div
      id="quote-box-wrapper"
      className="relative bg-slate-950 w-full p-2 z-50 border-t-4 border-orange-800"
    >
      <div
        id="quote-box"
        className="relative bg-slate-950 max-w-7xl w-full justify-center text-center p-1 mx-auto my-1 z-50"
      >
        {/* Quote text and author */}
        <div id="quote-text-container" className="flex flex-col items-center overflow-hidden">
          <p
            id="text"
            className={`text-xl text-gray-300 text-center transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
          >
            <span
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "1.5em",    // Adjust size as needed
                verticalAlign: "middle",
                marginRight: "0.3em",
              }}
            >
              “
            </span>
            {currentQuote.text}
            <span
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "1.5em",    // Adjust size for closing quote
                verticalAlign: "middle",
                marginLeft: "0.3em",
              }}
            >
              ”
            </span>
          </p>
          <p id="author" className="text-right text-gray-300 italic">
            - {currentQuote.author}
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuoteMachine;