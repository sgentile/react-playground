import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({onClick, onRemove, completed, text}) => (
  <li>
    <span onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      cursor: 'pointer'
    }} title={completed ? 'Click to restart' : 'Click to complete'}>
      {text}
    </span>
    
    <span style={{marginLeft: '10px', width:'20px', color:'red', cursor: 'pointer'}} title="Click to remove" onClick={onRemove}>x</span>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;