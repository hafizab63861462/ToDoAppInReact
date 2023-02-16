import { connect } from "react-redux";
import {
  editToDo,
  updateToDo,
  deleteToDo,
  completeToDo,
} from "../store/action";
import ToDoList from "../components/ToDoList";

function mapStateToProps(state = { toDos: [] }) {
  return {
    list: state.toDos,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    editAction: (toDo) => dispatch(editToDo(toDo)),
    updateAction: (toDo) => dispatch(updateToDo(toDo)),
    deleteAction: (toDo) => dispatch(deleteToDo(toDo)),
    completeAction: (toDo) => dispatch(completeToDo(toDo)),
  };
};

export const ToDoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
