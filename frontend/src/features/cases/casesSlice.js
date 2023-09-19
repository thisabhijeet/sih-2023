import { createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";

const initialState = {
  cases: [],
};

export const casesSlice = createSlice({
  name: "cases",
  initialState,
  reducers: {
    addACase: (state, data) => {
      console.log(data.payload, "payload");
      state.cases.push(data.payload);
      // console.log("first", state);

      // redirect("/cases");
    },
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addACase } = casesSlice.actions;

export default casesSlice.reducer;
