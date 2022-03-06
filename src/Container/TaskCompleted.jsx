import React, { useEffect, useState } from "react";
import TaskItemComPleted from "./TaskItemComPleted";
import { connect } from "react-redux";
function TaskCompleted(props) {
  // console.log(taskCompleted);
  // let taskCompleted = props.taskCompleted;
  // let [value, setValue] = useState();
  // useEffect(() => {
  //   console.log({ taskCompleted });
  // }, [taskCompleted]);
  let { ToDoListReducer } = props;
  console.log(ToDoListReducer.taskCompleted);
  const renderItem = () => {
    return ToDoListReducer.taskCompleted.map((item, index) => {
      return <TaskItemComPleted data={item} key={index} />;
    });
  };

  // console.log(taskCompleted);
  return (
    <div className="d-flex flex-column align-items-start  w-100">
      {console.log("renmder")}
      <h3 className="text-light">TaskComplete</h3>
      {renderItem()}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    ToDoListReducer: state.ToDoListReducer,
  };
};

export default connect(mapStateToProps)(TaskCompleted);
