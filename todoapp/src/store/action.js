import ActionType from "./actionTypes";

export const addToDo = (title, status, isShowUpdateField) => ({
  type: ActionType.Add,
  title,
});

export const editToDo = (id) => ({
  type: ActionType.Edit,
  id,
});

export const updateToDo = (obj) => ({
  type: ActionType.Update,
  obj,
});

export const deleteToDo = (id) => ({
  type: ActionType.Delete,
  id,
});

export const completeToDo = (id) => ({
  type: ActionType.Complete,
  id,
});
