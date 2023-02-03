import { useState, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState([]);

  const [newTask, setNewTask] = useState("");
  const [upDateData, setUpdateData] = useState("");

  const setTask = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask) {
      let newId = toDo.length + 1;
      let obj = { id: newId, title: newTask, status: false };
      setToDo([...toDo, obj]);
      setNewTask("");
    }
  };

  const editTask = (event) => {
    let obj = {
      id: upDateData.id,
      title: event.target.value,
      status: upDateData.status,
    };

    setUpdateData(obj);
  };

  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== upDateData.id);
    let obj = [...filterRecords, upDateData];
    setToDo(obj);
    setUpdateData("");
  };
  const deleteTask = (id) => {
    let obj = toDo.filter((task) => task.id != id);
    setToDo(obj);
  };
  const completeTask = (id) => {
    let obj = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(obj);
  };

  return (
    <div className="App container">
      <h1>My Todo </h1>

      <div className="row mb-3">
        <div className="col">
          <input
            className="form-control form-control-lg"
            value={newTask}
            onChange={setTask}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-success" onClick={() => addTask()}>
            Add Task
          </button>
        </div>
      </div>

      {toDo && toDo.length === 0 && <p> No Task</p>}
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task) => {
            return (
              <Fragment key={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? "done" : ""}>
                    <span
                      className="checkbox"
                      onClick={() => completeTask(task.id)}
                    >
                      {" "}
                      <FontAwesomeIcon icon={faCheckSquare} />
                    </span>
                    <span className="taskText"> {task.title}</span>
                  </div>
                  <div className="iconWrap">
                    <span
                      onClick={() =>
                        setUpdateData({
                          id: task.id,
                          title: task.title,
                          status: task.status,
                        })
                      }
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                    <span onClick={() => deleteTask(task.id)}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                  {upDateData && (
                    <>
                      <div>
                        <input value={upDateData.title} onChange={editTask} />
                        <button
                          className="btn btn-lg btn-success"
                          onClick={() => updateTask()}
                        >
                          Update Task
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </Fragment>
            );
          })}
    </div>
  );
}

export default App;
