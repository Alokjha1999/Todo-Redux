import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoapp/actions';

export const Form = () => {
  // Initialize dispatch function to interact with Redux store
  const dispatch = useDispatch();

  // State variable to store the value of the input field
  const [todoValue, setTodoValue] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior

    // Generate a unique ID for the todo item based on current timestamp
    const time = new Date().getTime();

    // Create a todo object with input value, timestamp as ID, and initial completed status
    const todoObj = {
      id: time,
      todo: todoValue,
      completed: false
    };

    // Dispatch the addTodo action with the todo object as payload
    dispatch(addTodo(todoObj));

    // Clear the input field after submission
    setTodoValue('');
  };

  return (
    <form className='form-group custom-form' onSubmit={handleSubmit}>
      <label>Add your todo-items</label>
      <div className='input-and-btn'>
        {/* Input field for entering todo item */}
        <input 
          type="text" 
          className='form-control' 
          required
          value={todoValue} 
          onChange={(e) => setTodoValue(e.target.value)} // Update todoValue state as user types
        />
        {/* Button to submit the form */}
        <button type="submit" className='btn btn-secondary btn-md'>ADD</button>
      </div>
    </form> 
  );
};
