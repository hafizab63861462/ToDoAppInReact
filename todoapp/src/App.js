import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ToDoListContainer } from "./containers/ToDoListContainer";
import { AddTaskContainer } from "./containers/AddTaskContainer";

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
