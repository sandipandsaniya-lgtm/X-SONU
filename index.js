
const PREFIX = ".";

const basicCommands = require("./commands/basic");
const funCommands = require("./commands/fun");
const toolsCommands = require("./commands/tools");

const commands = {
  ...basicCommands,
  ...funCommands,
  ...toolsCommands
};

function handleCommand(message, userId = "test-user") {
  const input = message.trim();

  if (!input.startsWith(PREFIX)) return null;

  const parts = input.slice(PREFIX.length).trim().split(/\s+/);
  const name = parts.shift().toLowerCase();

  const command = commands[name];

  if (!command) return "❌ Unknown command. Type .help";

  try {
    return command.run(parts, userId);
  } catch (error) {
    console.error(error);
    return "⚠️ Command error.";
  }
}

function showMenu() {
  const categories = {};

  for (const [name, command] of Object.entries(commands)) {
    categories[command.category] ??= [];
    categories[command.category].push(name);
  }

  let output = "╭━━━〔 X SONU 〕━━━╮\n";

  for (const [category, names] of Object.entries(categories)) {
    output += `\n❖ ${category.toUpperCase()}\n`;
    output += names.map(name => PREFIX + name).join("\n") + "\n";
  }

  return output + "\n╰━━━━━━━━━━━━━━╯";
}

console.log("X SONU COMMAND ENGINE READY!");
console.log(Object.keys(commands).length + " commands loaded.");

const readline = require("readline");
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

terminal.on("line", message => {
  console.log(
    message.trim() === ".menu"
      ? showMenu()
      : handleCommand(message) || ""
  );
});
