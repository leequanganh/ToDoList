import React from "react";
import AddTask from "./AddTask";
import TaskCompleted from "./TaskCompleted";
import TaskToDo from "./TaskToDo";

export default function () {
  return (
    <div className=" d-flex flex-column align-items-center container  border border-secondary bg-dark">
      <h1 className="text-light">To Do List</h1>
      <AddTask />
      <TaskToDo />
      <TaskCompleted />
    </div>
  );
}
