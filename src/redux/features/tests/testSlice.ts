import { createSlice } from "@reduxjs/toolkit";

type test_report_param = {
  investigation: string;
  test: string;
  unit: string;
  normal_unit: string;
  result: string | null | undefined;
};
type newTest = {
  test_name: string;
  test_code: string;
  speciman: string;
  type: string;
  repost_gorup: string;
  hospital_groupe: string;
  price: number;
  vat_rate: number;
  process_time: number;
  total_test_param: number;
  test_report_param: string[];
};

const initialState: newTest = {
  test_name: "",
  test_code: "",
  speciman: "",
  type: "",
  repost_gorup: "",
  hospital_groupe: "",
  price: 0,
  vat_rate: 0,
  process_time: 0,
  total_test_param: 0,
  test_report_param: [],
};

const newTestSlice = createSlice({
  name: "new_test",
  initialState,
  reducers: {
    addNewTestReportParam: (state, { payload }) => {
      state.total_test_param = state.total_test_param + 1;
      const item = {
        ...payload,
        sl_no: state.total_test_param,
      };
      state.test_report_param = [...state.test_report_param, item];
    },
    removeTestReportParam: (state, { payload }) => {
      const data = state.test_report_param.filter(
        (item) => item.sl_no !== payload
      );
      state.test_report_param = data;
    },
  },
});

export default newTestSlice.reducer;
export const { addNewTestReportParam, removeTestReportParam } =
  newTestSlice.actions;
