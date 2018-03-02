import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';
import { getVisibleTodos } from '../selectors';
import TodoList from '../components/TodoList';


const mapStateToProps = (state, props) => {
  return {
    todos: getVisibleTodos(state, props),
    searchStatus: state.searchStatus
  }
}

const VisibleTodoList = connect(
  mapStateToProps, {
    onTodoClick: toggleTodo,
    onTodoRemove: removeTodo
  }
)(TodoList);

export default VisibleTodoList;