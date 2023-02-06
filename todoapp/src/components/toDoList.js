import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState } from "react";
import "./toDoList.css";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import UpdateForm from "./updateForm";

const ToDOList = () => {
  const list = useSelector((state) => state?.toDos);
  const dispatch = useDispatch();

  console.log(list);

  const deleteTaskHandler = (id) => {
    dispatch({ type: "Delete", id: id });
  };

  const editTaskHandler = (id) => {
    dispatch({ type: "Edit", id: id });
  };

  const completeTaskHandler = (id) => {
    dispatch({ type: "Complete", id: id });
  };

  return (
    <div>
      {list &&
        list
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task) => {
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
