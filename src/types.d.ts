export type RootState = {
	currentStroke: Stroke;
	strokes: Stroke[];
	historyIndex: number;
	errorAlert: ErrorAlert;
	modalState: ModalState;
	projectName: ProjectName;
	projectsList: ProjectsList;
};

export type ProjectName = string;

export type ProjectsList = {
	error: string;
	pending: boolean;
	projects: Project[];
};

export type Stroke = {
	points: Point[];
	color: string;
};

export type Point = {
	x: number;
	y: number;
};

export type ModalState = {
	isShown: boolean;
	modalName: ModalNames | null;
};

export type ModalNames =
	| "PROJECTS_SAVE_MODAL"
	| "PROJECTS_MODAL"
	| "ALERT_MODAL";

export type Project = {
	image: string;
	name: string;
	id: string;
};

export type ErrorAlert = {
	message: string;
};
