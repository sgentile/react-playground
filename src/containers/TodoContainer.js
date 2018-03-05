import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import VisibleTodoList from './VisibleTodoList';
import AddTodo from './AddTodo';

import busyIndicator from '../components/highOrderComponent/busyIndicator';
import { fetchTodos } from '../actions';
import { merge } from 'glamor';

import { getUserName } from '../api';

import { selectUserName } from '../selectors';

class TodoApp extends Component {
  componentDidMount(){    
    this.props.dispatch({
      type: 'FETCH_USER',
      promise: getUserName()
    })
  }
  render(){
    return (
      <div>
        {this.props.username}
        <AddTodo/>
        <VisibleTodoList />
        <p>
          <i>(Higher Order Component... LoadTime {this.props.loadTime} seconds)</i>
        </p>
      </div>      
    )
  }
}
 
TodoApp.propTypes = {
  loadTime: PropTypes.string
}

const mapStateToProps = state => ({
  isSearching: state.searchStatus.isSearching,
  username: selectUserName(state) //selector...
})

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}


//store.dispatch(fetchTodos());
const WrappedApp = busyIndicator(TodoApp);
// export default WrappedApp;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedApp);
