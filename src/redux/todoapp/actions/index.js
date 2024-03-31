// ../redux/todoapp/actions.js

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_ALL = 'DELETE_ALL';

// Action creators
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: todo,
});

export const deleteAll = () => ({
  type: DELETE_ALL,
});

// Define the deleteTodo action
export const deleteTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});
