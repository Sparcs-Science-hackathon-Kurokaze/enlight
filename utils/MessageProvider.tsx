import { useToast } from "@apideck/components";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { createContext, ReactNode, useEffect, useState } from "react";
import { sendMessage } from "./sendMessage";

export const ChatsContext = createContext<Partial<ContextProps>>({});
ChatsContext.displayName = "ChatsContext";
// Context Props definition (adjust as needed)
export interface ContextProps {
  messages: ChatCompletionMessageParam[];
  addMessage: (content: string) => void;
  isLoadingAnswer: boolean;
}

export function MessagesProvider({ children }: { children: ReactNode }) {
  const { addToast } = useToast();
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false);

  useEffect(() => {
    const initializeChat = () => {
      const systemMessage: ChatCompletionMessageParam = {
        role: "system",
        content: "너는 과학을 문제를 제시하는 전문가야. ",
      };
      setMessages([systemMessage]);
    };

    // Initialize chat if no messages are present
    if (!messages?.length) {
      initializeChat();
    }
  }, [messages?.length, setMessages]);

  const addMessage = async (content: string) => {
    setIsLoadingAnswer(true);
    try {
      const newMessage: ChatCompletionMessageParam = {
        role: "user",
        content,
      };
      const newMessages = [...messages, newMessage];

      // Add the user message to the state
      setMessages(newMessages);

      const { data } = await sendMessage(newMessages);
      const reply = data.choices[0].message;

      // Add the assistant message to the state
      setMessages([...newMessages, reply]);
    } catch (error) {
      // Show error if something goes wrong
      addToast({ title: "An error occurred", type: "error" });
    } finally {
      setIsLoadingAnswer(false);
    }
  };

  return (
    <ChatsContext.Provider value={{ messages, addMessage, isLoadingAnswer }}>
      {children}
    </ChatsContext.Provider>
  );
}
