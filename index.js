
const commands = {
  ping: () => "Pong! X Sonu is alive.",
  alive: () => "X Sonu is running!",
  owner: () => "Bot Owner: SONU",
  help: () => "Use .menu to see commands.",
  menu: () => `
╭━━━〔 X SONU 〕━━━╮
┃ .ping
┃ .alive
┃ .owner
┃ .help
┃ .menu
╰━━━━━━━━━━━━━━╯
`
};

function handleCommand(message) {
  const input = message.trim();

  if (!input.startsWith(".")) {
    return "Not a command.";
  }

  const name = input.slice(1).split(/\s+/)[0].toLowerCase();

  if (!commands[name]) {
    return "Unknown command. Type .menu";
  }

  return commands[name]();
}

// Local testing
const readline = require("readline");

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("X SONU Command Engine Started!");
console.log("Try 
