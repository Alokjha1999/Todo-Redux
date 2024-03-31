import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-icons-kit';
import { trash } from 'react-icons-kit/feather/trash';
import { edit2 } from 'react-icons-kit/feather/edit2';
import { deleteTodo } from '../redux/todoapp/actions';

export const Todos = ({ handleEditClick, editFormVisibility }) => {
  // Retrieve todos from Redux store
  const todos = useSelector((state) => state.operationsReducer);
  const dispatch = useDispatch();

  // Function to handle deleting a todo
  const handleDeleteClick = (id) => {
    dispatch(deleteTodo(id));
  };

  return todos.map((todo) => (
    <div key={todo.id} className='todo-box'>
      <div className='content'>
        {/* Checkbox to mark todo item as completed */}
        <input type="checkbox" checked={todo.completed}></input>
        {/* Todo item text */}
        <p style={todo.completed ? { textDecoration: 'line-through' } : {}}>
          {todo.todo}
        </p>
      </div>
      <div className='actions-box'>
        {/* Edit and Delete icons */}
        <span onClick={() => handleEditClick(todo)}><Icon icon={edit2} /></span>
        <span onClick={() => handleDeleteClick(todo.id)}><Icon icon={trash} /></span>
      </div>
    </div>
  ));
};
