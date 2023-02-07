import { useForm } from "react-hook-form";
import ActionType from "../config/enums";
const InputField = (props) => {
  const { register, reset } = useForm();

  const onSubmit = (event) => {
    event.preventDefault();
    let obj = {
      id: props?.value?.id,
      title: event.target.value,
      status: props?.value?.status,
    };
    props.onKeyPress(obj);
    reset();
  };

  const handleKeyDown = (event) => {
    if (event.key === ActionType.Enter) {
      onSubmit(event);
    }
  };

  return (
    <form onKeyPress={handleKeyDown}>
      <input
        className={props?.className}
        placeholder={props?.placeholder}
        defaultValue={props?.value?.title}
        {...register("Task")}
      />
    </form>
  );
};

export default InputField;
