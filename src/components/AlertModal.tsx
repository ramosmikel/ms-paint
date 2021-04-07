import React from "react";
import { useDispatch, useSelector } from "react-redux";
import close from "xp.css/themes/XP/icon/close.svg";
import { hide } from "../modules/modals/slice";
import { errorSelector } from "../modules/errorAlert/selectors";

export const AlertModal = () => {
	const dispatch = useDispatch();
	const error = useSelector(errorSelector);

	const handleCloseAlert = () => dispatch(hide());

	return (
		<div className="window modal-panel">
			<div className="title-bar">
				<div className="title-bar-text">Alert</div>
				<div className="title-bar-controls">
					<button aria-label="Close" onClick={handleCloseAlert} />
				</div>
			</div>
			<div className="alert-container">
				<div className="alert-container-message">
					<div style={{ height: "30px", width: "30px" }}>
						<img alt="close-icon" src={close} />
					</div>
					<div>{error.message}</div>
				</div>
				<div className="alert-container-button-container">
					<button onClick={handleCloseAlert}>OK</button>
				</div>
			</div>
		</div>
	);
};
