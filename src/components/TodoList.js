import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { fetchTodos, toggleTodo, removeTodo } from '../actions';

const TodoList = ({todos, onTodoClick, onTodoRemove}) => (
  <div className="todo-list">
    <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} 
        onClick={() => onTodoClick(todo.id)}
        onRemove={() => {
          if(window.confirm('Are you sure you want to delete this todo?')){
            onTodoRemove(todo.id)
          }
        }}
      />
    ))}
    </ul>
    
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoRemove: PropTypes.func.isRequired
}

export default TodoList;