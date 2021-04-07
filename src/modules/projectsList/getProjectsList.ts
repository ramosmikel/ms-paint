import { AppThunk } from "../../store";
import { fetchProjectsList } from "./api";
import { getProjectsListSuccess, getProjectsListFailed } from "./slice";
import { Project } from "../../types";

export const getProjectsList = (): AppThunk => async (dispatch) => {
	try {
		const projectsList: Project[] = await fetchProjectsList();
		dispatch(getProjectsListSuccess(projectsList));
	} catch (err) {
		dispatch(getProjectsListFailed(err.toString()));
	}
};
