import { RootState } from '../../types';

export const modalStateSelector = ({ modalState }: RootState) => modalState;
export const modalIsShownSelector = ({ modalState }: RootState) => modalState.isShown;
export const modalNameSelector = ({ modalState }: RootState) => modalState.modalName;
