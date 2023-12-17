import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAppState {
	theme: "light" | "dark";
}

const initialState: IAppState = {
	theme: "dark",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeTheme(state){
      console.log("CHANGINF TEME", state)
      state.theme = state.theme === "light" ? "dark" : "light";
    }
  }
})

export const { changeTheme } = appSlice.actions;