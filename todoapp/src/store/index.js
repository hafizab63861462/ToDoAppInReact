import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  toDos: [],
};

const toDo = (state = initialState, action) => {
  if (action.type === "ADD") {
    const newToDo = {
      id: state?.toDos[state?.toDos?.length - 1]?.id + 1 || 0,
      title: action.title,
      status: action.status,
      isShowUpdateField: action.isShowUpdateField,
    };
    const temp = [...state.toDos, newToDo];
    return {
      ...state,
      toDos: temp,
    };
  } else if (action.type === "Edit") {
    const temp = state.toDos.map((todo) => {
      if (todo.id === action.id) {
        return { ...todo, isShowUpdateField: true };
      }
      return todo;
    });

    return {
      ...state,
      toDos: temp,
    };
  } else if (action.type === "Update") {
    let filterRecords = [...state.toDos].filter(
      (task) => task.id !== action.obj.id
    );
    let upDateObject = [...filterRecords, action.obj];
    return {
      ...state,
      toDos: upDateObject,
      isShowUpdateField: false,
    };
  } else if (action.type === "Delete") {
    let temp = state.toDos.filter((task) => task.id != action.id);
    return {
      ...state,
      toDos: temp,
    };
  } else if (action.type === "Complete") {
    const temp = state.toDos.map((todo) => {
      if (todo.id === action.id) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });

    return {
      ...state,
      toDos: temp,
    };
  }
};

const store = createStore(toDo, initialState);

export default store;
