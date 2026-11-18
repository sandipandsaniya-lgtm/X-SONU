
module.exports = {
  reverse: {
    category: "Tools",
    description: "Reverse a text",
    run: (args) => args.join(" ").split("").reverse().join("") || "Enter some text."
  },

  count: {
    category: "Tools",
    description: "Count characters and words",
    run: (args) => {
      const text = args.join(" ");
      if (!text) return "Enter some text.";

      return `📝 Characters: ${text.length}\n🔤 Words: ${text.trim().split(/\s+/).length}`;
    }
  },

  upper: {
    category: "Tools",
    description: "Convert text to uppercase",
    run: (args) => args.join(" ").toUpperCase() || "Enter some text."
  },

  lower: {
    category: "Tools",
    description: "Convert text to lowercase",
    run: (args) => args.join(" ").toLowerCase() || "Enter some text."
  },

  choose: {
    category: "Tools",
    description: "Choose a random option",
    run: (args) => {
      const options = args.join(" ").split("|").map(x => x.trim()).filter(Boolean);

      if (options.length < 2) return "Example: .choose Red | Blue";

      return "🎯 My choice: " + options[Math.floor(Math.random() * options.length)];
    }
  },

  roll: {
    category: "Tools",
    description: "Roll a dice",
    run: () => "🎲 You rolled: " + (Math.floor(Math.random() * 6) + 1)
  },

  date: {
    category: "Tools",
    description: "Show current date",
    run: () => "📅 " + new Date().toLocaleDateString()
  },

  8ball: {
    category: "Tools",
    description: "Ask the magic 8 ball",
    run: () => {
      const answers = [
        "Yes! ✨",
        "No. ❌",
        "Maybe. 🤔",
        "Definitely! 🔥",
        "Try again later. ⏳"
      ];

      return answers[Math.floor(Math.random() * answers.length)];
    }
  }
};
