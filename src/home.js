document.addEventListener('DOMContentLoaded', function () {
    const quotes = [
      "Let your soul breathe.",
      "Mood is the language of emotion.",
      "Calm minds create calm moments.",
      "Find beauty in the present.",
      "Motion fuels emotion.",
      "Breathe. Flow. Be.",
      "Feel more. Think less.",
      "Your vibe sets the tone.",
      "Freedom starts from within.",
      "Balance begins with stillness."
    ];

    const quoteText = document.getElementById('quote-text');
    const quoteBtn = document.getElementById('quote-btn');

    function showRandomQuote() {
      const index = Math.floor(Math.random() * quotes.length);
      quoteText.textContent = quotes[index];
    }

    
    showRandomQuote();

    
    quoteBtn.addEventListener('click', showRandomQuote);
  });