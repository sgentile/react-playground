import { createSelector } from 'reselect';

const getVisibilityFilter = (state, props) => state.visibilityFilter;
const getTodos = (state, props) => state.todos;

export const getVisibleTodos = createSelector(  
  [ getVisibilityFilter, getTodos ],
  (visibilityFilter, todos) => {
    // eslint-disable-next-line
    switch(visibilityFilter) {
      case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
      case 'SHOW_ALL':
        return todos;
    }
  }
)