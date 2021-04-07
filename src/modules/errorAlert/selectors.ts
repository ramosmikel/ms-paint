import { RootState } from "../../types";

export const errorSelector = ({ errorAlert }: RootState) => errorAlert;
