import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { handleSaveProject } from "../sharedActions";
import { ProjectName, RootState } from "../../types";

const initialState: RootState["projectName"] = "untitled";

const slice = createSlice({
	name: "projectName",
	initialState,
	reducers: {
		changeName: (_state, { payload }: PayloadAction<ProjectName>) => {
			return payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(handleSaveProject, (_state, { payload }) => {
			return payload.projectName;
		});
	},
});

export default slice.reducer;
export const { changeName } = slice.actions;
