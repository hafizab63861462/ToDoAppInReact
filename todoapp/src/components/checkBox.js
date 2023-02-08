const CheckBox = ({ type, id, onClick }) => {
  const handelClick = () => {
    onClick(id);
  };
  return <input type={type} onClick={handelClick}></input>;
};

export default CheckBox;
