import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hide } from "../modules/modals/slice";
import { loadProject } from "../modules/strokes/loadProject";
import { projectsListSelector } from "../modules/projectsList/selectors";
import { getProjectsList } from "../modules/projectsList/getProjectsList";

export const ProjectsModal = () => {
	const dispatch = useDispatch();
	const projectsList = useSelector(projectsListSelector);

	useEffect(() => {
		dispatch(getProjectsList());
	}, [dispatch]);

	const onLoadProject = (projectId: string) => {
		dispatch(loadProject(projectId));
		dispatch(hide());
	};

	return (
		<div className="window modal-panel">
			<div className="title-bar">
				<div className="title-bar-text">Counter</div>
				<div className="title-bar-controls">
					<button aria-label="Close" onClick={() => dispatch(hide())} />
				</div>
			</div>
			<div className="projects-container">
				{(projectsList.projects || []).map((project) => {
					const handleOnLoad = () => onLoadProject(project.id);

					return (
						<div
							key={project.id}
							onClick={handleOnLoad}
							className="project-card"
						>
							<img src={project.image} alt="thumbnail" />
							<div>{project.name}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
