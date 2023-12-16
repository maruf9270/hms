import { baseApi } from "./api/baseApi";
import modalSlice from "./features/modal/modalSlice";
import testSlice from "./features/tests/testSlice";
// import authSlice from "./features/auth/authSlice";

export const reducer = {
  new_test: testSlice,
  modal_status: modalSlice,
  [baseApi.reducerPath]: baseApi.reducer,
};
