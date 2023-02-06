import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  toDos: [],
};

const toDoSlice = createSlice({
  name: "ToDoApp",
  initialState,
  reducers: {
    Add(state, action) {
      const newToDo = {
        id: state?.toDos?.length,
        title: action.payload.title,
        status: action.payload.status,
        isShowUpdateField: action.payload.isShowUpdateField,
      };
      state.toDos.push(newToDo);
    },
    Edit(state, action) {
      state.toDos = state.toDos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isShowUpdateField: true };
        }
        return todo;
      });
    },
    Delete(state, action) {
      state.toDos = state.toDos.filter((task) => task.id != action.payload.id);
    },
    Update(state, action) {
      state.toDos = [...state.toDos].map((task) => {
        if (task.id === action.payload.obj.id) {
          return {
            ...task,
            title: action.payload.obj.title,
            isShowUpdateField: false,
          };
        }
        return task;
      });
    },
    Complete(state, action) {
      state.toDos = state.toDos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      });
    },
  },
});

const store = configureStore({
  reducer: toDoSlice.reducer,
});

export const toDoActions = toDoSlice.actions;
export default store;
