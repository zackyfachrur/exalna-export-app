import { motion } from "@libs/pages";
import { useMotionLayout } from "@hooks/useMotionLayout";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@store/index";
import { addChatLog, selectChat } from "@store/chatSlice";
import { fetchUserChatLogs } from "@store/chatLogicThunk";
import { ChatLog } from "@type/fetch";
import { useEffect, useState } from "react";

const HistoryChat = () => {
  const { showSide } = useMotionLayout();
  const dispatch = useDispatch<AppDispatch>();
  const chatLogs = useSelector((state: RootState) => state.chat.chatLogs);
  const selectedChat = useSelector((state: RootState) => state.chat.selectedChat);

const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    dispatch(fetchUserChatLogs());
  }, [dispatch]);

  const handleSelect = (log: ChatLog) => {
    dispatch(selectChat(log));
  };

const handleNewChat = () => {
  if (isCreating) return; 

  setIsCreating(true); 

  const newChat: ChatLog = {
    id: Date.now(),
    keyword: "New Chat",
    prompt: "",
    response: JSON.stringify({ explanation_ai: [], services: [] }),
    created_at: new Date().toISOString(),
  };

  dispatch(addChatLog(newChat));
  dispatch(selectChat(newChat));
};
  useEffect(() => {
  if (selectedChat && selectedChat.prompt !== "") {
    setIsCreating(false); 
  }
}, [selectedChat]);

  return (
    <motion.nav
      initial={{ opacity: 1, x: 0 }}
      animate={{ x: showSide ? 280 : 120 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white w-[300px] flex flex-col justify-between z-30 h-[95vh] pt-12 rounded-2xl drop-shadow-xl self-center"
    >
      {/* Scrollable area */}
      <div className="flex-1 overflow-y-auto">
        <ul className="py-4 flex flex-col px-6 text-gray-600 gap-1 font-medium select-none">
          <h2 className="px-4 mt-4 border-b border-gray-300 pb-4 mb-4 text-gray-400 text-center font-medium text-lg">
            Build with Gemini
          </h2>

          {chatLogs.length === 0 ? (
            <li className="text-sm text-gray-400 px-4">You have no history yet</li>
          ) : (
            <>
              <li className="text-sm text-gray-400 px-4 mb-2">
                Recent Chat <i className="ri-corner-right-down-line"></i>
              </li>
              {chatLogs.map((log) => (
                <li
                  key={log.id}
                  onClick={() => handleSelect(log)}
                  className="hover:bg-gray-100 text-gray-400 text-sm rounded-full py-1 px-4 cursor-pointer truncate"
                >
                  {log.keyword}
                </li>
              ))}
            </>
          )}
        </ul>
      </div>

      {/* Bottom Button (not scrollable) */}
      <div className="px-8 py-6">
        <button
          disabled={isCreating}
          className="bg-black text-white font-bold px-4 py-2 w-full rounded-2xl cursor-pointer flex gap-2 justify-center items-center hover:bg-gray-950"
          onClick={handleNewChat}
        >
          <i className="ri-add-line text-xl"></i>
          <span>New Chat</span>
        </button>
      </div>
    </motion.nav>
  );
};

export default HistoryChat;
