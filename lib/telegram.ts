const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

interface ContactNotification {
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  message: string;
  source: "quick-contact" | "contact-form" | "quote-form";
}

export async function sendTelegramNotification(data: ContactNotification): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn("Telegram credentials not configured");
    return false;
  }

  const sourceEmoji = {
    "quick-contact": "💬",
    "contact-form": "📧",
    "quote-form": "📋",
  };

  const sourceLabel = {
    "quick-contact": "Quick Contact",
    "contact-form": "Contact Form",
    "quote-form": "Quote Request",
  };

  const text = `
${sourceEmoji[data.source]} *New ${sourceLabel[data.source]}*

👤 *Name:* ${escapeMarkdown(data.name)}
📧 *Email:* ${escapeMarkdown(data.email)}
${data.phone ? `📱 *Phone:* ${escapeMarkdown(data.phone)}` : ""}
${data.company ? `🏢 *Company:* ${escapeMarkdown(data.company)}` : ""}

💬 *Message:*
${escapeMarkdown(data.message)}

🌐 _delexllc.com_
  `.trim();

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error("Telegram API error:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Telegram notification error:", error);
    return false;
  }
}

function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
}
