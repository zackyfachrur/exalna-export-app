import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type DataItem = { name?: string; url?: string; prompt?: string };

interface ChatLogicState {
  services: DataItem[];
  explanations: DataItem[];
  loading: boolean;
  error: string;
}

const initialState: ChatLogicState = {
  services: [],
  explanations: [],
  loading: false,
  error: "",
};

const chatLogicSlice = createSlice({
  name: "chatLogic",
  initialState,
  reducers: {
    setServices: (state, action: PayloadAction<DataItem[]>) => {
      state.services = action.payload;
    },
    setExplanations: (state, action: PayloadAction<DataItem[]>) => {
      state.explanations = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    resetChatLogic: (state) => {
      state.services = [];
      state.explanations = [];
      state.loading = false;
      state.error = "";
    },
  },
});

export const { setServices, setExplanations, setLoading, setError, resetChatLogic } = chatLogicSlice.actions;

export default chatLogicSlice.reducer;
