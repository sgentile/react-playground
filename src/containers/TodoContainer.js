import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import VisibleTodoList from './VisibleTodoList';
import AddTodo from './AddTodo';
import busyIndicator from '../components/highOrderComponent/busyIndicator';
import { fetchTodos } from '../actions';
import { merge } from 'glamor';

class TodoApp extends Component {
  render(){
    return (
      <div>
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
  isSearching: state.searchStatus.isSearching
})


//store.dispatch(fetchTodos());
const WrappedApp = busyIndicator(TodoApp);
// export default WrappedApp;
export default connect(
  mapStateToProps,
  {}
)(WrappedApp);
