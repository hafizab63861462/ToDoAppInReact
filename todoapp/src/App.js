import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ToDoListContainer } from "./containers/toDoListContainer";
import { AddTaskContainer } from "./containers/addTaskContainer";

function App() {
  return (
    <div className="container center">
      <AddTaskContainer />
      <hr />
      <ToDoListContainer />
    </div>
  );
}

export default App;
