import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const apiUrl = import.meta.env.VITE_API_URL;
const modelName = import.meta.env.VITE_MODEL_NAME;

const ChatPage = () => {
    type Message = { sender: "user" | "bot" | "error"; text: string };
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState<boolean | null>(null);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        const userMsg = input.trim();
        if (!userMsg) return;

        setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
        setInput("");
        setLoading(true)

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
        }
        finally {
            setLoading(false)
        }
    };


    return (
        <div className="flex flex-col h-screen bg-gray-50">
            <header className="bg-blue-500 text-white p-4 text-center font-semibold">
                💬 Chat local — Bienvenido
            </header>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 flex flex-col">
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                        <div
                            className={`list-inside list-decimal max-w-[80%] p-3 rounded-xl shadow ${msg.sender === "user"
                                    ? "bg-blue-100 text-gray-800"
                                    : msg.sender === "bot"
                                        ? "bg-green-100 text-gray-800"
                                        : "bg-red-100 text-gray-800"
                                }`}
                        >
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
                        </div>
                    </div>
                ))}

                {loading && (
                    <div className="text-gray-500 italic animate-pulse">🤖 loading...</div>
                )}
            </div>

            <form onSubmit={handleSend} className="p-3 bg-gray-100 flex gap-2">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Escribí un mensaje..."
                    className="flex-1 border rounded-lg p-2"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600 transition"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default ChatPage;
