const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN secret is missing!");
}

const API = `https://api.telegram.org/bot${BOT_TOKEN}`;

async function sendMessage(chatId, text) {
  await fetch(`${API}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text
    })
  });
}

async function handleMessage(message) {
  if (!message.text) return;

  const chatId = message.chat.id;
  const command = message.text.trim().split(/\s+/)[0].split("@")[0];

  switch (command) {
    case "/start":
      await sendMessage(chatId,
        "Welcome to X SONU! 🚀\nYour Telegram bot is ready."
      );
      break;

    case "/ping":
      await sendMessage(chatId, "Pong! 🟢 X SONU is alive.");
      break;

    case "/help":
      await sendMessage(chatId,
        "X SONU Commands:\n/start - Start bot\n/ping - Check bot\n/help - Show help"
      );
      break;
  }
}

async function startBot() {
  console.log("X SONU Telegram Bot started!");

  let offset = 0;

  while (true) {
    try {
      const response = await fetch(
        `${API}/getUpdates?offset=${offset}&timeout=30`
      );

      const data = await response.json();

      if (!data.ok) throw new Error(data.description);

      for (const update of data.result) {
        offset = update.update_id + 1;

        if (update.message) {
          await handleMessage(update.message);
        }
      }
    } catch (error) {
      console.error("Polling error:", error.message);
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
}

startBot();

