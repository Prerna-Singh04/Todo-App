import "./CSS/todo.css";
import React, { useState } from "react";
import CreateTodoModal from "./create-todo-modal.js";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editId, setEditId] = useState("");

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  const handleEdit = (id) => {
    setShowEditModal(true);
    setEditId(id);
  };

  const handleListChange = (value, index) => {
    todoList[index].name = value;
  };

  function saveEdit() {
    setShowEditModal(false);
    setTodoList([...todoList]);
  }

  const handleDelete = (list, index) => {
    let data = todoList.splice(index, 1);
    setTodoList([...todoList]);
  };

  return (
    <div className="col-12 col-sm-8 col-md-6 col-lg-3 mx-auto todo_section">
      <h2 className="todo_section_head">Todo</h2>
      <div className="create_todo">
        {todoList &&
          todoList.map((list, index) => {
            return (
              <div
                draggable
                id={list.id}
                key={`${list.id}`}
                className="todo_list_element"
                onDragEnter={drag}
              >
                {showEditModal && editId === list.id ? (
                  <input
                    type="text"
                    defaultValue={list.name}
                    autoFocus={true}
                    className="todo_list_name"
                    style={{ border: "none", textAlign: "center" }}
                    onChange={(e) => handleListChange(e.target.value, index)}
                  />
                ) : (
                  <p className="todo_list_name">{list.name}</p>
                )}
                {showEditModal && editId === list.id ? (
                  <button
                    onClick={saveEdit}
                    className="todo_element_btn btn btn-info"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={(e) => handleEdit(list.id)}
                    className="todo_element_btn btn btn-info"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={(e) => handleDelete(list, index)}
                  className="todo_element_btn btn btn-danger"
                >
                  Delete
                </button>
              </div>
            );
          })}
        <CreateTodoModal setTodoList={setTodoList} />
      </div>
    </div>
  );
};

export default Todo;
