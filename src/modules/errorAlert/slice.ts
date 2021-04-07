import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ErrorAlert, RootState } from "../../types";
import { createAlert } from "../sharedActions";

const initialState: RootState["errorAlert"] = {
	message: "",
};

const slice = createSlice({
	name: "errorAlert",
	initialState,
	reducers: {
		alertMessage: (state, { payload }: PayloadAction<ErrorAlert>) => {
			state.message = payload.message;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(createAlert, (state, { payload }) => {
			state.message = payload.errorAlert.message;
		});
	},
});

export default slice.reducer;
export const { alertMessage } = slice.actions;
