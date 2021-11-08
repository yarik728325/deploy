import { createAction } from "../../utils/createActions";

export const deletaAction = createAction('/tab/delete');
export const changeTab = createAction('/tab/ChangeTab');
export const changeInfoInTab = createAction('/tab/ChangeInfo');
export const searchTab = createAction('/tab/SearchTab');
export const initialState = createAction('/tab/Initial');
export const addnewTab = createAction('/tab/addNew');