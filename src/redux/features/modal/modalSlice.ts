import { createSlice } from "@reduxjs/toolkit";

type modal_state = {
  is_modal_open: boolean;
};
const initialState: modal_state = {
  is_modal_open: false,
};

const modalState = createSlice({
  name: "modal_state",
  initialState,
  reducers: {
    changeModalStatus: (state) => {
      state.is_modal_open = !state.is_modal_open;
    },
  },
});

export default modalState.reducer;
export const { changeModalStatus } = modalState.actions;
