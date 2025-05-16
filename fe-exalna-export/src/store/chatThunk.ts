
import { AppDispatch } from "./index";
import { fetchChatLogs } from "@services/ChatLogServices";
import { setChatLogs, setLoading, setError } from "./chatSlice";

export const fetchUserChatLogs = (userId: number) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  dispatch(setError(""));
  try {
    const logs = await fetchChatLogs(userId);
    dispatch(setChatLogs(logs));
  } catch (err) {
    console.error("Failed to fetch chat logs", err);
    dispatch(setError("Failed to fetch chat logs"));
  } finally {
    dispatch(setLoading(false));
  }
};
