import React, { useState } from "react";

const TodoForm = (props) => {
    const { todoList, setTodoList } = props;
    const [item, setItem] = useState("");

    const handleAddToDo = () => {
        if (item === "") return;
        const newTodo = {
            id: Math.floor(Math.random() * 100000),
            description: item,
            isCompleted: false,
            createdAt: new Date(),
        };

        const tempToDo = [...todoList, newTodo];
        setTodoList(tempToDo);
        setItem("");
    };


  return (
    
    <div className='container d-flex justify-content-center'>
        <div className='todo-container'>
            <div className='card card-sm p-3 shadow'>
                <h3 className='bg-success text-light text-center py-2 my-2'>
                   Create New Task
                </h3>
                <div className='card-body'>
                    <form action=''>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='mb-2'>
                                    <label
                                        htmlFor=''
                                        className='form-label'>
                                        Title
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Please enter the title.'
                                    />
                                </div>
                            </div>
                    <div className='col-12'>
                                <div className='mb-2'>
                                    <label
                                        htmlFor=''
                                        className='form-label'>
                                       Description
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Enter task description.'
                                    />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='float-end my-3'>
                                    <button
                                        onClick={handleAddToDo}
                                        className='btn btn-success  '>
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
