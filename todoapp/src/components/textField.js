import { useForm } from "react-hook-form";
import EnumType from "../config/enums";
const TextField = ({
  className,
  placeholder,
  value,
  fieldName,
  onKeyPress,
}) => {
  const { register, reset } = useForm();

  const onSubmit = (event) => {
    event.preventDefault();
    if (event.target.value) {
      let obj = {
        id: value?.id,
        title: event.target.value,
        status: value?.status,
      };
      onKeyPress(obj);
      reset();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === EnumType.Enter) {
      onSubmit(event);
    }
  };

  return (
    <form onKeyPress={handleKeyDown}>
      <input
        className={className}
        placeholder={placeholder}
        defaultValue={value?.title}
        {...register(fieldName)}
      />
    </form>
  );
};

export default TextField;
