
module.exports = {
  joke: {
    category: "Fun",
    description: "Get a random joke",
    run: () => {
      const jokes = [
        "Why was the computer cold? It left its Windows open! 😂",
        "Why did the phone go to school? To improve its reception! 📱",
        "Why don't programmers like nature? Too many bugs! 🐛",
        "What is a robot's favourite snack? Microchips! 🤖"
      ];

      return jokes[Math.floor(Math.random() * jokes.length)];
    }
  },

  fact: {
    category: "Fun",
    description: "Get a random fact",
    run: () => {
      const facts = [
        "Octopuses have three hearts. 🐙",
        "A group of flamingos is called a flamboyance. 🦩",
        "Honey can remain stable for a very long time when properly stored. 🍯"
      ];

      return facts[Math.floor(Math.random() * facts.length)];
    }
  },

  quote: {
    category: "Fun",
    description: "Get a motivational quote",
    run: () => "Great things take time. Keep moving forward! ✨"
  },

  coin: {
    category: "Fun",
    description: "Flip a virtual coin",
    run: () => Math.random() < 0.5 ? "Heads! 🪙" : "Tails! 🪙"
  }
};
