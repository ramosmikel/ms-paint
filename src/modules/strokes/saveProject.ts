import { AppThunk } from "../../store";
import { newProject } from "./api";

export const saveProject = (
	projectName: string,
	thumbnail: string
): AppThunk => async (_dispatch, getState) => {
	try {
		const response = await newProject(
			projectName,
			getState().strokes,
			thumbnail
		);

		if (!response) {
			throw new Error(response);
		}
	} catch (err) {
		console.log(err.message);
	}
};
