import { connect } from "react-redux";
import AddTask from "../components/AddTask";
import { addToDo } from "../store/action";

const mapDispatchToProps = (dispatch) => {
  return {
    add: (payload) => dispatch(addToDo(payload)),
  };
};

export const AddTaskContainer = connect(null, mapDispatchToProps)(AddTask);
