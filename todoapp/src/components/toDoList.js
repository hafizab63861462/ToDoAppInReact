import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState } from "react";
import "./toDoList.css";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import UpdateForm from "./updateForm";
import { toDoActions } from "../store";

const ToDOList = () => {
  const list = useSelector((state) => state?.toDos);
  const dispatch = useDispatch();

  console.log(list);

  const deleteTaskHandler = (id) => {
    dispatch(toDoActions.Delete({ id }));
  };

  const editTaskHandler = (id) => {
    dispatch(toDoActions.Edit({ id }));
  };

  const completeTaskHandler = (id) => {
    dispatch(toDoActions.Complete({ id }));
  };

  return (
    <div>
      {list &&
        list.map((task) => {
          return (
            <Fragment key={task?.id}>
              <div className="col taskBg">
                {list[task.id]?.isShowUpdateField ? (
                  <>
                    <UpdateForm
                      id={task?.id}
                      title={task?.title}
                      status={task.status}
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
