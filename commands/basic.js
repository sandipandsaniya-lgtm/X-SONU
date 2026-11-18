
module.exports = {
  ping: {
    category: "Basic",
    description: "Check bot response",
    run: () => "🏓 Pong! X SONU is online."
  },

  alive: {
    category: "Basic",
    description: "Check bot status",
    run: () => "✅ X SONU is alive!"
  },

  bot: {
    category: "Basic",
    description: "Show bot name",
    run: () => "🤖 X SONU"
  },

  owner: {
    category: "Basic",
    description: "Show bot owner",
    run: () => "👑 SONU"
  },

  help: {
    category: "Basic",
    description: "Show help",
    run: () => "Type .menu to see all commands."
  },

  time: {
    category: "Basic",
    description: "Show current time",
    run: () => new Date().toLocaleString()
  }
};
