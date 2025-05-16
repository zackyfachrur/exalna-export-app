import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  userId?: number;
}

const initialState: AuthState = {
  userId: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
    clearUserId: (state) => {
      state.userId = undefined;
    },
  },
});

export const { setUserId, clearUserId } = authSlice.actions;
export default authSlice.reducer;
