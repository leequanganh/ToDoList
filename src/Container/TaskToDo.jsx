import React from "react";
import TaskItemToDo from "./TaskItemToDo";
import { connect } from "react-redux";

function TaskToDoToDo({ ToDoListReducer }) {
  // console.log(this.props.ToDoListReducer);
  return (
    <div className="d-flex flex-column align-items-start  w-100">
      <h3 className="text-light">Task to do </h3>
      {ToDoListReducer.taskToDoList.map((item, index) => {
        return <TaskItemToDo key={index} data={item} id={index} />;
      })}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    ToDoListReducer: state.ToDoListReducer,
  };
};
export default connect(mapStateToProps)(TaskToDoToDo);
