import React from "react";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
function AddTask(props) {
  let noiDungSua = props.ToDoListReducer.valueInput.noiDung.toString();
  let idSua = props.ToDoListReducer.valueInput.id;

  const [value, setValue] = useState("");
  const changeInput = (event) => {
    let value = event.target.value;
    setValue(value);
  };
  const handleAdd = (event) => {
    event.preventDefault();
    props.them(value);
    setValue("");
    // console.log(value);
  };
  const handleCapNhat = () => {
    props.capNhat(idSua, value);
    return true;
  };
  useEffect(() => {
    setValue(noiDungSua);
  }, [noiDungSua]);
  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        value={value}
        onChange={(e) => changeInput(e)}
        className="p-2 rounded"
        placeholder="enter your task to do ...."
      />
      {idSua !== "" ? (
        <button
          disabled
          type="submit"
          className="m-2 btn btn-success"
          onClick={handleAdd}
        >
          <i className="fa-solid fa-plus"></i>
          Add
        </button>
      ) : (
        <button
          type="submit"
          className="m-2 btn btn-success"
          onClick={handleAdd}
        >
          <i className="fa-solid fa-plus"></i>
          Add
        </button>
      )}
      <button type="button" className="btn btn-primary" onClick={handleCapNhat}>
        <i className="fa-solid fa-rotate"></i>Update
      </button>
    </form>
  );
}
const mapStateToProps = (state) => {
  return {
    ToDoListReducer: state.ToDoListReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    them: (data) =>
      dispatch({
        type: "THEM",
        data: data,
      }),
    capNhat: (id, noiDung) => {
      dispatch({
        type: "CAP_NHAT",
        id,
        noiDung,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
