import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchChatLogs } from "@services/ChatLogServices";
import { ChatLog } from "@type/fetch";

export const fetchUserChatLogs = createAsyncThunk<ChatLog[], void>(
  "chat/fetchUserChatLogs",
  async (_, { rejectWithValue }) => {
    try {
      const userStr = localStorage.getItem("user");
      if (!userStr) {
        return rejectWithValue("User not found in localStorage");
      }

      const user = JSON.parse(userStr);
      const userId = user.id;

      if (!userId) {
        return rejectWithValue("User ID not found");
      }

      const logs = await fetchChatLogs(userId);
      return logs;
    } catch (error) {
      console.error("Error while getting data", error);
      return rejectWithValue("Failed to fetch chat logs");
    }
  }
);
