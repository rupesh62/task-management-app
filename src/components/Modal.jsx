import { useState, useEffect } from "react";

const Modal = (props) => {
    const { editItem, setEditItem, todoList, setTodoList } = props;
    const [editText, setEditText] = useState("");

    useEffect(() => {
        if (editItem.description) setEditText(editItem.description);
    }, [editItem]);

    const handleClose = () => {
        setEditItem(null);
    };

    const handleEdit = () => {
        const newEditedToDoList = todoList.map((item) => {
            if (item.id === editItem.id) {
                return {
                    ...item,
                    description: editText,
                };
            } else {
                return item;
            }
        });
        setTodoList(newEditedToDoList);
        setEditItem(null);
    };

    return (
        <div class='modal fade show d-block' tabindex='-1'>
            <div class='modal-dialog'>
                <div class='modal-content'>
                    <div class='modal-header'>
                        <h5 class='modal-title'>
                            <i className='fa-solid fa-edit me-2'></i>
                            <span>Edit To Do</span>
                        </h5>
                        <button
                            onClick={handleClose}
                            type='button'
                            class='btn-close'
                            data-bs-dismiss='modal'
                            aria-label='Close'></button>
                    </div>
                    <div class='modal-body'>
                        <input
                            type='text'
                            className='form-control'
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                        />
                    </div>
                    <div class='modal-footer'>
                        <button
                            type='button'
                            onClick={handleClose}
                            class='btn btn-secondary'
                            data-bs-dismiss='modal'>
                            Close
                        </button>
                        <button
                            type='button'
                            onClick={handleEdit}
                            class='btn btn-primary'>
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
