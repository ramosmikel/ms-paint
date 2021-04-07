import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAlert, handleSaveProject } from "../sharedActions";
import { ModalNames, RootState } from "../../types";

const initialState: RootState["modalState"] = {
	isShown: false,
	modalName: null,
};

const slice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		show: (state, action: PayloadAction<ModalNames>) => {
			state.isShown = true;
			state.modalName = action.payload;
		},
		hide: (state) => {
			state.isShown = false;
			state.modalName = null;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(createAlert, (state) => {
			state.modalName = "ALERT_MODAL";
			state.isShown = true;
		});
		builder.addCase(handleSaveProject, (state) => {
			state.isShown = false;
			state.modalName = null;
		});
	},
});

export default slice.reducer;
export const { show, hide } = slice.actions;
