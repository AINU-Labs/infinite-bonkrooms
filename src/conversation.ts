import "dotenv/config";
import { ainuAgent } from "./agents/ainu";
import { claudeAgent } from "./agents/claude";
import { ainuMessages, claudeMessages } from "./messages";
import { outputResponse } from "./util";

export async function startConversation() {
  for (let i = 0; i < 10; i++) {
    const ainuResponse = await ainuAgent.generateText({
      messages: ainuMessages,
      modelId: "claude-opus-4-1-20250805",
    });

    outputResponse("Ainu", ainuResponse.data?.text || "");

    claudeMessages.push({
      role: "user",
      content: ainuResponse.data?.text || "",
    });

    const claudeResponse = await claudeAgent.generateText({
      messages: claudeMessages,
      modelId: "claude-opus-4-1-20250805",
    });

    outputResponse("Claude", claudeResponse.data?.text || "");

    ainuMessages.push({
      role: "assistant",
      content: claudeResponse.data?.text || "",
    });
  }
}
