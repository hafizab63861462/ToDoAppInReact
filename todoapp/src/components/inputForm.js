import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toDoActions } from "../store";
import "./inputForm.css";

const InputForm = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  const inputValueHandler = (event) => {
    setNewTask(event.target.value);
  };

  const addTaskHandler = (event) => {
    if (event.key === "Enter" && newTask) {
      dispatch(
        toDoActions.Add({
          title: newTask,
          status: false,
          isShowUpdateField: false,
        })
      );
      setNewTask("");
    }
  };

  return (
    <div className=".container">
      <h1>My Todo </h1>
      <div className="row mb-3">
        <div className="col">
          <input
            className="form-control"
            placeholder="Input task name and then tab enter to add "
            value={newTask}
            onChange={inputValueHandler}
            onKeyPress={addTaskHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default InputForm;
