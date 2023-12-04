import React from "react";
import "./CSS/TodoItems.css";
import check from "./Assets/check.png";
import close from "./Assets/close.png";
import uncheck from "./Assets/uncheck.png";

const TodoItems = ({ no, display, text, setTodos }) => {
  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
  };

  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  };

  return (
    <div className="todoitems">
      <div
        className={`todoitems-container ${display}`}
        onClick={() => {
          toggle(no);
        }}
      >
        {display === "" ? (
          <img src={uncheck} alt="Check" />
        ) : (
          <img src={check} alt="" />
        )}

        <div className="todoitems-text">{text}</div>
      </div>
      <img
        className="todoitem-cross-icon"
        onClick={() => {
          deleteTodo(no);
        }}
        src={close}
        alt=""
      />
    </div>
  );
};

export default TodoItems;
