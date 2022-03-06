import React from "react";
import { connect } from "react-redux";
function TaskItemComPleted(props) {
  let { data, id } = props;
  return (
    <div className="d-flex w-100 justify-content-between ">
      <div className="text-success d-flex align-items-center">
        <h2>
          <i className="fa-solid fa-check-double fs-1"></i>
        </h2>
        <p className="mx-4">{data}</p>
      </div>
      <button
        className="btn bg-warning"
        onClick={() => {
          props.xoa(id, "compl");
        }}
      >
        <i style={{ color: "red" }} className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    xoa: (id, locate) => {
      dispatch({
        type: "XOA",
        id,
        locate,
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(TaskItemComPleted);
