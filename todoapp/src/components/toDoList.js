import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import "./toDoList.css";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import InputField from "./InputField";

const ToDOList = ({
  list,
  editAction,
  deleteAction,
  completeAction,
  updateAction,
}) => {
  const deleteTaskHandler = (id) => {
    deleteAction(id);
  };

  const editTaskHandler = (id) => {
    editAction(id);
  };

  const completeTaskHandler = (id) => {
    completeAction(id);
  };

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
                  <>
                    <InputField
                      key={task.id}
                      className=" form-control-sm"
                      value={task}
                      onKeyPress={updateTaskHandler}
                    />
                  </>
                ) : (
                  <>
                    <div className={task?.status ? "done" : ""}>
                      <input
                        type="checkbox"
                        onClick={() => completeTaskHandler(task?.id)}
                      ></input>
                      <span className="taskText">{task?.title}</span>
                    </div>
                  </>
                )}
                <div className="iconWrap">
                  <span
                    className="p-3"
                    onClick={() => editTaskHandler(task?.id)}
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </span>
                  <span onClick={() => deleteTaskHandler(task.id)}>
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

export default ToDOList;
