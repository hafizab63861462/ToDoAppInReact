import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ActionType from "../config/enums";

const initialState = {
  toDos: [],
};

const toDo = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.Add:
      const newToDo = {
        id: state?.toDos[state?.toDos?.length - 1]?.id + 1 || 0,
        title: action.title,
        status: action.status,
        isShowUpdateField: action.isShowUpdateField,
      };
      const temp_add = [...state.toDos, newToDo];
      return {
        ...state,
        toDos: temp_add,
      };
      break;
    case ActionType.Edit:
      const temp_edit = state.toDos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, isShowUpdateField: true };
        }
        return todo;
      });

      return {
        ...state,
        toDos: temp_edit,
      };
      break;
    case ActionType.Delete:
      let temp_delete = state.toDos.filter((task) => task.id != action.id);
      return {
        ...state,
        toDos: temp_delete,
      };
      break;
    case ActionType.Update:
      const temp_update = state.toDos.map((todo) => {
        if (todo.id === action.obj.id) {
          return { ...todo, title: action.obj.title, isShowUpdateField: false };
        }
        return todo;
      });

      return {
        ...state,
        toDos: temp_update,
      };
      break;
    case ActionType.Complete:
      const temp_complete = state.toDos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      });

      return {
        ...state,
        toDos: temp_complete,
      };
      break;
  }
};

const store = createStore(toDo, initialState);

export default store;
