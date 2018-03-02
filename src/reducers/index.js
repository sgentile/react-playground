import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

//refactor into it's own reducer...
const defaultSearchStatus = {
  isSearching: false
}
const searchStatus = (state=defaultSearchStatus, action) => {
  switch(action.type) {
    case 'REQUEST_TODOS':
      return { ...state, isSearching: true }
    case 'RECEIVE_TODOS':
    return { ...state, isSearching: false }
    default:
      return state
  }
}
const reducers = combineReducers({
  searchStatus,
  todos,
  visibilityFilter
})

export default reducers;