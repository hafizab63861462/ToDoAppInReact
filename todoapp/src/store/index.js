import { createStore } from "redux";
import ActionType from "./actionTypes";

const initialState = {
  toDos: [],
};

const toDo = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.Add:
      const newToDo = {
        id: state?.toDos[state?.toDos?.length - 1]?.id + 1 || 0,
        title: action.title,
        status: false,
        isShowUpdateField: false,
      };
      return {
        ...state,
        toDos: [...state.toDos, newToDo],
      };

    case ActionType.Edit:
      const tempEdit = state.toDos.map((todo) =>
        todo.id === action.id
          ? { ...todo, isShowUpdateField: true }
          : { ...todo, isShowUpdateField: false }
      );

      return {
        ...state,
        toDos: tempEdit,
      };

    case ActionType.Delete:
      let tempDelete = state.toDos.filter((task) => task.id !== action.id);
      return {
        ...state,
        toDos: tempDelete,
      };

    case ActionType.Update:
      const tempUpdate = state.toDos.map((todo) =>
        todo.id === action.obj.id
          ? { ...todo, title: action.obj.title, isShowUpdateField: false }
          : todo
      );

      return {
        ...state,
        toDos: tempUpdate,
      };

    case ActionType.Complete:
      const tempComplete = state.toDos.map((todo) =>
        todo.id === action.id ? { ...todo, status: !todo.status } : todo
      );

      return {
        ...state,
        toDos: tempComplete,
      };

    default:
      return {
        ...state,
      };
  }
};

const store = createStore(toDo, initialState);

export default store;
