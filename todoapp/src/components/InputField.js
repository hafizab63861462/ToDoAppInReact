import { useForm } from "react-hook-form";
import ActionType from "../config/enums";
const InputField = ({
  className,
  placeholder,
  value,
  fieldName,
  onKeyPress,
}) => {
  const { register, reset } = useForm();

  const onSubmit = (event) => {
    if (event.key === ActionType.Enter && event.target.value) {
      event.preventDefault();
      let obj = {
        id: value?.id,
        title: event.target.value,
        status: value?.status,
      };
      onKeyPress(obj);
      reset();
    }
  };

  return (
    <form onKeyPress={onSubmit}>
      <input
        className={className}
        placeholder={placeholder}
        defaultValue={value?.title}
        {...register(fieldName)}
      />
    </form>
  );
};

export default InputField;
