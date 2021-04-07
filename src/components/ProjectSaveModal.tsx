import React, { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { useCanvas } from "../context/CanvasContext";
import { hide } from "../modules/modals/slice";
import { createAlert, handleSaveProject } from "../modules/sharedActions";
import { saveProject } from "../modules/strokes/saveProject";
import { getCanvasImage } from "../utils/canvas";
import { getBase64Thumbnail } from "../utils/scaler";

export const ProjectSaveModal = () => {
	const [projectName, setProjectName] = useState("");
	const dispatch = useDispatch();
	const canvasRef = useCanvas();

	const onProjectNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setProjectName(e.target.value);
	};

	const onProjectSave = async () => {
		if (!projectName) {
			dispatch(
				createAlert({ errorAlert: { message: "Invalid Document Name" } })
			);

			return;
		}

		const file = await getCanvasImage(canvasRef.current);
		if (!file) {
			return;
		}

		const thumbnail = await getBase64Thumbnail({ file, scale: 0.1 });
		dispatch(saveProject(projectName, thumbnail));
		dispatch(handleSaveProject({ projectName }));
		setProjectName("");
	};

	return (
		<div className="window modal-panel">
			<div className="title-bar">
				<div className="title-bar-text">Save</div>
			</div>
			<div className="window-body">
				<div className="field-row-stacked">
					<label htmlFor="projectName">Project name</label>
					<input id="projectName" onChange={onProjectNameChange} type="text" />
				</div>
				<div className="field-row">
					<button onClick={onProjectSave}>Save</button>
					<button onClick={() => dispatch(hide())}>Cancel</button>
				</div>
			</div>
		</div>
	);
};
