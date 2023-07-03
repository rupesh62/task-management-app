import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedTodoList = localStorage.getItem("todoList");
    if (storedTodoList) {
      setTodoList(JSON.parse(storedTodoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleDeleteToDo = (selectedId) => {
    const newTodoList = todoList.filter((item) => item.id !== selectedId);
    setTodoList(newTodoList);
  };

  const handleComplete = (selectedId) => {
    const newTodoList = todoList.map((item) => {
      if (item.id === selectedId) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      } else {
        return item;
      }
    });

    setTodoList(newTodoList);
  };

  const handleAddTask = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (newTask) => {
    const updatedTask = {
      ...newTask,
      isCompleted: false,
    };
    const newTodoList = [...todoList, updatedTask];
    setTodoList(newTodoList);
    setShowForm(false);
  };

  return (
    <div>
      <div className="container">
        <div className="col-12 text-end">
          <button className="btn btn-primary m-3" onClick={handleAddTask}>
            Add New Task
          </button>
        </div>
      </div>
      <div>
        {showForm ? (
          <TodoForm onSubmit={handleFormSubmit} />
        ) : (
          <>
            {todoList.length > 0 ? (
              <div>
                {todoList.map((toDoItem) => (
                  <div
                    key={toDoItem.id}
                    className="d-flex align-items-center justify-content-between mb-1"
                  >
                    <input
                      defaultChecked={toDoItem.isCompleted}
                      type="checkbox"
                      onChange={() => handleComplete(toDoItem.id)}
                      className="form-check-input"
                    />
                    <div>
                    <p className="todo-item-description">
                      <strong>Title:</strong> {toDoItem.title}
                    </p>
                    <p className="todo-item-description">
                      <strong>Description:</strong> {toDoItem.description}
                    </p>
                    </div>
                    <button
                      onClick={() => handleDeleteToDo(toDoItem.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p>Nothing Added</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TodoList;
