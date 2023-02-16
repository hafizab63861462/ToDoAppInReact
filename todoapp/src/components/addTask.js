import TextField from "./TextField";
import "bootstrap/dist/css/bootstrap.min.css";

const AddTask = ({ add }) => {
  const addTaskHandler = (obj) => {
    add(obj.title);
  };

  return (
    <div>
      <h1>My Todo </h1>
      <div className="row mb-3">
        <div className="col">
          <TextField
            className="form-control"
            placeholder="Input task name and then tab enter to add "
            onKeyPress={addTaskHandler}
            fieldName="Task"
          />
        </div>
      </div>
    </div>
  );
};

export default AddTask;
