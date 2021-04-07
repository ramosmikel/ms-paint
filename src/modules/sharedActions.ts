import { createAction } from "@reduxjs/toolkit";
import { Stroke, ModalState, ErrorAlert, ProjectName } from "../types";

export const endStroke = createAction<{
	stroke: Stroke;
	historyIndex: number;
}>("endStroke");

export const createAlert = createAction<{
	errorAlert: ErrorAlert;
	modalState?: ModalState;
}>("createAlert");

export const handleSaveProject = createAction<{
	projectName: ProjectName;
	modalState?: ModalState;
}>("handleSaveProject");
