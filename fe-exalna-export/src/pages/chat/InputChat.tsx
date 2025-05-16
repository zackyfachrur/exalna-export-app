import React, { useState } from "react";
import { InputChatProps } from "@type/layouts";
import MicButton from "./MicButton";
import { ModeItem, ModeItemButton } from "./ChatMode";
import { motion } from "@libs/pages";

const InputChat = ({ onSend, loading }: InputChatProps) => {
  const [input, setInput] = useState<string>("");
  const [activeMode, setActiveMode] = useState<string>("");
  const [showModeSelection, setShowModeSelection] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    onSend(input.trim(), activeMode);

    setInput("");
    setShowModeSelection(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInput(val);
    setShowModeSelection(val.startsWith("/"));
  };

  const handleModeSelect = (selectedMode: string) => {
    setActiveMode(selectedMode);
    setShowModeSelection(false);
    setInput(""); 
  };

  return (
    <>
      {showModeSelection && (
        <motion.div
          initial={{ opacity: 1, y: 100 }}
          animate={{ y: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-32 flex flex-col gap-1 border-gray-200 p-2 mt-1 w-auto py-2 rounded-2xl bg-black border"
        >
          <ModeItem
            logo={<i className="ri-inbox-unarchive-line"></i>}
            title="Import"
            desc="Displaying only imported items"
            onClick={() => handleModeSelect("import")}
          />
          <ModeItem
            logo={<i className="ri-drag-drop-line"></i>}
            title="Item Card"
            desc="Showing prompt with the item"
            onClick={() => handleModeSelect("itemcard")}
          />
          <ModeItem
            logo={<i className="ri-inbox-archive-line"></i>}
            title="Export"
            desc="Displaying only exported items"
            onClick={() => handleModeSelect("export")}
          />
        </motion.div>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full border-2 gap-2 px-3 py-3 -mt-8 rounded-2xl border-gray-200 bg-black"
      >
        <div className="px-3">
          <input
            type="text"
            className="w-full outline-none text-white font-medium"
            placeholder="Ask Gemini or type '/' for mode selection"
            value={input}
            onChange={handleChange}
            disabled={loading}
          />
        </div>
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-row gap-2">
            <button
              type="button"
              className="bg-white px-3 py-2 hover:bg-gray-200 cursor-pointer rounded-full"
              disabled={loading}
            >
              <i className="ri-attachment-line"></i>
            </button>

            <ModeItemButton
              logo={<i className="ri-inbox-unarchive-line"></i>}
              title="Import"
              isActive={activeMode === "import"}
              isReset={false}
              onClick={() => handleModeSelect("import")}
            />
            <ModeItemButton
              logo={<i className="ri-drag-drop-line"></i>}
              title="Item Card"
              isActive={activeMode === "itemcard"}
              isReset={false}
              onClick={() => handleModeSelect("itemcard")}
            />
            <ModeItemButton
              logo={<i className="ri-inbox-archive-line"></i>}
              title="Export"
              isActive={activeMode === "export"}
              isReset={false}
              onClick={() => handleModeSelect("export")}
            />
            <ModeItemButton
              logo={<i className="ri-refresh-line"></i>}
              title="Reset"
              isActive={activeMode === ""}
              isReset={true}
              onClick={() => handleModeSelect("")}
            />
          </div>

          <div className="flex flex-row gap-2">
            <MicButton />
            <button
              type="submit"
              className="bg-white px-3 py-2 hover:bg-gray-200 cursor-pointer rounded-full"
              disabled={loading}
            >
              <i className="ri-send-plane-2-fill"></i>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default InputChat;
