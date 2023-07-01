import { useState } from "react";

import TodoList from "../components/ToDoApp/TodoList";

const ToDoApp = () => {
    const [todoList, setTodoList] = useState([]);

    return (      
        <div>
            <div className='todo-container shadow p-2 py-3'>
               
                <TodoList todoList={todoList} setTodoList={setTodoList} />
            </div>
        </div>
    );
};

export default ToDoApp;
