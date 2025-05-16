import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chatSlice";
import authReducer from "./authSlice";
import chatLogicReducer from "./chatLogicSlice"

export const store = configureStore({
  reducer: {
    chat: chatReducer,  
    auth: authReducer,
    chatLogic: chatLogicReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
