import React, { Component } from "react";
let dataToDoList = {
  taskToDoList: ["Task1", "Task2", "Task3"],
  valueInput: { id: "", noiDung: "" },
  taskCompleted: [],
};
export const ToDoListReducer = (state = dataToDoList, action) => {
  let cloneState = { ...state };
  // console.log({ cloneState });
  switch (action.type) {
    case "THEM":
      cloneState.taskToDoList.push(action.data);
      state = cloneState;
      return { ...state };
    case "SUA":
      let dataSua = cloneState.taskToDoList[action.id];
      cloneState.valueInput.id = action.id;
      cloneState.valueInput.noiDung = dataSua;
      state = cloneState;
      return { ...state };

    case "XOA":
      if (action.locate === "compl") {
        cloneState.taskCompleted.splice(action.id, 1);
      } else if (action.locate === "todo") {
        cloneState.taskToDoList.splice(action.id, 1);
      }

      state = cloneState;
      return { ...state };

    case "CAP_NHAT":
      cloneState.taskToDoList[action.id] = action.noiDung;
      cloneState.valueInput.id = "";
      cloneState.valueInput.noiDung = "";
      state = cloneState;
      return { ...state };

    case "SUCCESS":
      let id = action.id;
      let itemPush = state.taskToDoList[id];
      cloneState.taskToDoList.splice(id, 1);
      cloneState.taskCompleted.push(itemPush);
      state = cloneState;
      // console.log(state.taskToDoList);
      // console.log(state);
      return { ...state };
    default:
      return { ...state };
  }
};
