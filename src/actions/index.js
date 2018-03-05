
import { v4 } from 'uuid';
import { getTodos, getUserName } from '../api';

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: v4(),
    text
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const removeTodo = id => {
  return {
    type: 'REMOVE_TODO',
    shouldConfirm: true,
    confirmationMessage: 'Are you sure you want to remove this todo?',
    id
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

//--- action creators async ---

export const REQUEST_TODOS = 'REQUEST_TODOS';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';

function receiveTodos(todos) {
  return {
    type: RECEIVE_TODOS,
    todos
  }
}

export const fetchTodos = () => {
  return dispatch => {
    dispatch({type: REQUEST_TODOS});
    return getTodos('all').then(response => dispatch(receiveTodos(response)))
  }
}


