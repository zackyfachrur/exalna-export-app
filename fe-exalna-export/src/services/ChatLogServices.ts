import axios from "axios";

export const fetchChatLogs = async (userId: number) => {
  const res = await axios.get(`${import.meta.env.VITE_CHATBOT_API_URL}/${userId}`);
  return res.data.data;
};