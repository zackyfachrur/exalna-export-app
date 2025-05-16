import { useState, useEffect, useRef } from "react";
import { getData } from "@services/ChatServices";
import { useDispatch, useSelector } from "react-redux";
import { addChatLog, selectChat, updateChatLog } from "@store/chatSlice";
import { ChatLog } from "@type/fetch";
import { DataItem } from "@type/pages";
import Notifications from "@components/ui/Notifications";
import { RootState } from "@store/index";

export const useChatLogic = () => {
  const [services, setServices] = useState<DataItem[]>([]);
  const [explanations, setExplanations] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [mode, setMode] = useState<string>(""); 

  const dispatch = useDispatch();
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const selectedChat = useSelector(
    (state: RootState) => state.chat.selectedChat
  );

  useEffect(() => {
    if (selectedChat?.response) {
      try {
        const parsed = JSON.parse(selectedChat.response);
        setServices(Array.isArray(parsed.services) ? parsed.services : []);
        setExplanations(Array.isArray(parsed.explanation_ai) ? parsed.explanation_ai : []);
      } catch {
        setServices([]);
        setExplanations([]);
      }
    } else {
      setServices([]);
      setExplanations([]);
    }
  }, [selectedChat]);

  const handlePrompt = async (input: string, selectedMode: string = "") => {
    setLoading(true);
    setError("");
    setMode(selectedMode);

    try {
      const response = await getData(input, selectedMode); 

      if (
        Array.isArray(response.services) &&
        Array.isArray(response.explanation_ai)
      ) {
        setServices(response.services);
        setExplanations(response.explanation_ai);

        const responseStr = JSON.stringify(response);

        if (selectedChat) {
          const updatedChat: ChatLog = {
            ...selectedChat,
            prompt: input,
            response: responseStr,
            keyword: input,
            created_at: new Date().toISOString(),
          };

          dispatch(updateChatLog(updatedChat));
          dispatch(selectChat(updatedChat));
        } else {
          const newChatLog: ChatLog = {
            id: Date.now(),
            keyword: input,
            prompt: input,
            response: responseStr,
            created_at: new Date().toISOString(),
          };

          dispatch(addChatLog(newChatLog));
          dispatch(selectChat(newChatLog));
        }
      } else {
        Notifications("Please Login First to use this AI");
        setError("Data format is invalid");
      }
    } catch (err) {
      console.error("Error getting data: ", err);
      Notifications("Please Login First to use this AI");
      setError("Connection Error while getting data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [services, explanations]);

  return {
    services,
    explanations,
    loading,
    error,
    mode,
    setMode,
    handlePrompt,
    chatBoxRef,
  };
};
