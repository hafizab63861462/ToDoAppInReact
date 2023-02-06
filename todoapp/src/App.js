import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import InputForm from "./components/inputForm";
import ToDOList from "./components/toDoList";

function App() {
  return (
    <div className="container center">
      <InputForm />
      <hr />
      <ToDOList />
    </div>
  );
}

export default App;
