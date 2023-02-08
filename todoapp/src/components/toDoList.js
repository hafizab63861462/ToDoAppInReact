import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import "./toDoList.css";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import TextField from "./textField";
import CheckBox from "./checkBox";

const ToDoList = ({
  list,
  editAction,
  deleteAction,
  completeAction,
  updateAction,
}) => {
  const updateTaskHandler = (obj) => {
    updateAction(obj);
  };

  return (
    <div>
      {list &&
        list.map((task) => {
          return (
            <Fragment key={task?.id}>
              <div className="col imageAllignment">
                {list[task.id]?.isShowUpdateField ? (
                  <TextField
                    key={task.id}
                    className=" form-control-sm"
                    value={task}
                    onKeyPress={updateTaskHandler}
                    fieldName="Task"
                  />
                ) : (
                  <div className={task?.status ? "done" : ""}>
                    <CheckBox
                      type="checkbox"
                      onClick={() => completeAction(task.id)}
                    />
                    <span className="taskText">{task?.title}</span>
                  </div>
                )}
                <div className="iconWrap">
                  <span className="p-3" onClick={() => editAction(task?.id)}>
                    <FontAwesomeIcon icon={faPen} />
                  </span>
                  <span onClick={() => deleteAction(task.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
              <hr />
            </Fragment>
          );
        })}
    </div>
  );
};

export default ToDoList;
