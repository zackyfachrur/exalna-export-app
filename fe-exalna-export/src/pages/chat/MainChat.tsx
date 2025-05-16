import { useEffect, useState } from "react";
import useUserName from "@hooks/useUserName";
import { ChatContainer } from "@components/ui/Container";
import AILogo from "@img/AI-Logo.png";
import { ExplanationItem, ServiceItem } from "@type/fetch";
import InputChat from "./InputChat";
import { useChatLogic } from "@hooks/useChatLogic";
import { motion } from "@libs/pages";
import { useSelector } from "react-redux";
import { RootState } from "@store/index";
import { Typewriter } from "react-simple-typewriter";
import { Lenis } from '@studio-freight/react-lenis';

const MainChat = () => {
  const username = useUserName();
  const { loading, handlePrompt } = useChatLogic();

  const selectedChat = useSelector(
    (state: RootState) => state.chat.selectedChat
  );

  const [parsedData, setParsedData] = useState<{
    explanation_ai: ExplanationItem[];
    services: ServiceItem[];
  }>({ explanation_ai: [], services: [] });

  useEffect(() => {
    if (selectedChat) {
      try {
        const parsed = JSON.parse(selectedChat.response);
        setParsedData({
          explanation_ai: parsed.explanation_ai || [],
          services: parsed.services || [],
        });
      } catch (err) {
        console.error("Gagal parse response JSON", err);
        setParsedData({ explanation_ai: [], services: [] });
      }
    } else {
      setParsedData({ explanation_ai: [], services: [] });
    }
  }, [selectedChat]);

  const isChatValid = selectedChat && selectedChat.prompt.trim() !== "";

  return (
    <section className="h-[100vh] w-full flex flex-col items-center justify-center">
      <ChatContainer>
        <div className="h-[90vh] flex flex-col justify-center gap-4">
          {isChatValid ? (
            <div className="self-end bg-white px-8 py-4 rounded-2xl rounded-tr-none">
              <h3 className="font-medium italic text-lg">
                {selectedChat!.keyword}
              </h3>
            </div>
          ) : (
            <h3 className="font-bold text-6xl text-white/0 bg-clip-text bg-gradient-to-r from-blue-600 to-red-500">
              Hello, {username !== null ? username : `What can I help with?`}
            </h3>
          )}

          {loading && (
            <motion.div
              initial={{ opacity: 1, y: 100 }}
              animate={{ y: 0 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 pb-4 mb-6 pt-4 px-8 animate-pulse"
            >
              <img
                src={AILogo}
                alt="Avatar"
                className="h-[40px] w-[40px] rounded-full"
              />
              <h2 className="font-bold">Thinking</h2>
              <span className="loader"></span>
            </motion.div>
          )}

          {isChatValid && (
            <Lenis root>
            <motion.div
              initial={{ opacity: 1, y: 200 }}
              animate={{ y: 0 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full px-12 py-8 space-y-4 overflow-y-auto max-h-[60vh] rounded-xl bg-white rounded-tl-none drop-shadow-2xl"
            >
              {parsedData.explanation_ai.map((item, idx) => {
                if (item.prompt.trim() === "") return null;
                return (
                  <div key={idx}>
                    <div className="flex items-center gap-2 border-b-2 border-blue-600 pb-4 mb-6 pt-4">
                      <img
                        src={AILogo}
                        alt="Avatar"
                        className="h-[40px] w-[40px] rounded-full"
                      />
                      <h2 className="font-bold">Gemini AI</h2>
                    </div>

                    <Typewriter
                      key={`${idx}-${item.prompt}`}
                      words={[item.prompt]}
                      loop={1}
                      typeSpeed={0}
                      deleteSpeed={0}
                    />
                  </div>
                );
              })}

              {parsedData.services.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2 bg-gray-100 px-4 py-2 rounded-2xl">
                  <div>
                    <h2 className="font-semibold">
                      <Typewriter
                        key={`${idx}-name`}
                        words={[item.name]}
                        loop={1}
                      typeSpeed={2}
                        deleteSpeed={0}
                      />
                    </h2>
                    <p>{item.description}</p>
                  </div>
                  <div className="flex gap-2">
                  <button
                    onClick={() => window.location.assign(`${item.url}`)}
                    className="bg-blue-600 w-[140px] text-white font-bold rounded-xl py-2 hover:bg-blue-700 cursor-pointer"
                  >
                    Request
                  </button>
                   <button
                    onClick={() => window.location.assign(`/chat`)}
                    className="bg-black w-[140px] text-white font-bold rounded-xl py-2 hover:bg-gray-950 cursor-pointer"
                  >
                    Cancel
                    </button>
                    </div>
                </div>
              ))}
            </motion.div>
              </Lenis>
          )}
        </div>

        <InputChat onSend={handlePrompt} loading={loading} />
      </ChatContainer>
    </section>
  );
};

export default MainChat;
