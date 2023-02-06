import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toDoActions } from "../store";

const UpdateForm = (props) => {
  const dispatch = useDispatch();

  const [updateData, setUpdateData] = useState({
    id: props.id,
    title: props.title,
    status: props.status,
  });

  const handleInputChange = (event) => {
    let newObj = {
      id: updateData.id,
      title: event.target.value,
      status: updateData.status,
    };
    setUpdateData(newObj);
  };

  const updateTaskHandler = (event) => {
    if (event.key === "Enter") {
      dispatch(toDoActions.Update({ obj: updateData }));
      setUpdateData("");
    }
  };

  return (
    <div className="">
      <input
        value={updateData.title}
        onChange={handleInputChange}
        className=" form-control-sm"
        onKeyPress={updateTaskHandler}
      />
    </div>
  );
};

export default UpdateForm;
