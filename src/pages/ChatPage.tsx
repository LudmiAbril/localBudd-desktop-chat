import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Button from "../components/ui/Button";
import { useUserStore } from "../store/UserStore";
import TypingDots from "../components/ui/TypingDots";
const apiUrl = import.meta.env.VITE_API_URL;
const modelName = import.meta.env.VITE_MODEL_NAME;

const ChatPage = () => {
  type Message = { sender: "user" | "bot" | "error"; text: string };
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState<boolean | null>(null);
  const { chatAvatar } = useUserStore();

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const userMsg = input.trim();
    if (!userMsg) return;

    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: modelName,
          prompt: userMsg,
        }),
      });

      const text = await res.text();
      const fullResponse = text
        .split("\n")
        .filter((line) => line.trim())
        .map((line) => {
          try {
            return JSON.parse(line).response || "";
          } catch {
            return "";
          }
        })
        .join("");

      setMessages((prev) => [...prev, { sender: "bot", text: fullResponse }]);
    } catch (err) {
      console.error("Error al conectar con el modelo:", err);
      setMessages((prev) => [...prev, { sender: "bot", text: "error" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[var(--bg-color-secondary)]">
      <div className="flex-1 overflow-y-auto p-4 space-y-3 flex flex-col">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-5 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "bot" && (
              <img
                src={`/src/assets/${chatAvatar}-avatar.png`}
                className="h-14 w-14"
              />
            )}

            <div
              className={`list-inside list-decimal max-w-[80%] p-3 rounded-xl  ${
                msg.sender === "user"
                  ? "bg-white text-gray-800"
                  : msg.sender === "bot"
                  ? "bg-green-100 text-gray-800"
                  : "bg-red-100 text-gray-800"
              }`}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {msg.text}
              </ReactMarkdown>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex gap-6 items-center text-gray-500 italic ">
            <img
              src={`/src/assets/${chatAvatar}-avatar.png`}
              className="h-14 w-14"
            />{" "}
            <p className="text-md flex">
              Escribiendo
              <TypingDots />
            </p>
          </div>
        )}
      </div>

      <form onSubmit={handleSend} className="py-3 px-2 flex gap-2 items-center">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribí un mensaje..."
          className="flex-1 input-base border-none h-12"
        />
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
};

export default ChatPage;
