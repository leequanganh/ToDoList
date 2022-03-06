import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
function TaskItemToDo(props) {
  // const [checked, setChecked] = useState();
  let { data, id } = props;
  let [idSucc, setId] = useState();
  const handleSuccess = (id) => {
    setId(id);
    props.success(idSucc);
  };
  useEffect(() => {
    setId(id);
  }, [id]);
  return (
    <div className="d-flex w-100 justify-content-between">
      <label className="lableCus text-light">
        <input
          // checked={id === checked}
          // defaultChecked
          type="checkbox"
          onChange={() => {
            handleSuccess(id);
            // setChecked(id);
          }}
        />

        <span className="checkmark" />
        {data}
      </label>
      <div>
        <button
          onClick={() => {
            props.sua(id);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          type="button"
          onClick={() => {
            props.xoa(id, "todo");
          }}
        >
          <i style={{ color: "red" }} className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    sua: (id) =>
      dispatch({
        type: "SUA",
        id,
      }),
    xoa: (id, locate) =>
      dispatch({
        type: "XOA",
        id,
        locate,
      }),
    success: (id) =>
      dispatch({
        type: "SUCCESS",
        id,
      }),
  };
};
export default connect(null, mapDispatchToProps)(TaskItemToDo);
