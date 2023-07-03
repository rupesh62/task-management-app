import React, { useState } from "react";

const TodoForm = (props) => {
  const { onSubmit } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddToDo = () => {
    if (title === "" || description === "") return;
    const newTodo = {
      id: Math.floor(Math.random() * 100000),
      title: title,
      description: description,
      isCompleted: false,
      createdAt: new Date(),
    };

    onSubmit(newTodo);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="todo-container">
        <div className="card card-sm p-3 shadow">
          <h3 className="bg-success text-light text-center py-2 my-2">Create New Task</h3>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-12">
                  <div className="mb-2">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Please enter the title."
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-2">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      placeholder="Enter task description."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="float-end my-3">
                    <button onClick={handleAddToDo} className="btn btn-success">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
