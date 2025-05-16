export type FetchProps = {
  name: string;
  url: string;
  description: string;
};

export type ExplanationItem = {
  prompt: string;
};

export type ServiceItem = {
  name: string;
  url: string;
  description: string;
};

export interface HistoryChatProps {
  chatLogs: ChatLog[];
  onSelect: (chat: ChatLog) => void;
}

export interface MainChatProps {
  chatLogs: ChatLog[];
  setChatLogs: React.Dispatch<React.SetStateAction<ChatLog[]>>;
  selectedChat: ChatLog | null;
  setSelectedChat: React.Dispatch<React.SetStateAction<ChatLog | null>>;
}

export interface ChatLog {
  id: number;
  keyword: string;
  prompt: string;
  response: string;
  created_at: string;
}

export interface NewChatLog {
  keyword: string;
  prompt: string;
  response: string;
  created_at: string;
}

export interface ExplanationItem {
  prompt: string;
}

export interface ServiceItem {
  name: string;
  url: string;
}