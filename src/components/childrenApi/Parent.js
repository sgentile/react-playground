import React, { Component, Children } from 'react';

class Parent extends Component {
  render(){
    const buttons = Children.map(this.props.children, child => (
      <button>
        {child}
      </button>
    ))
    return (
      <div>
        {/* {this.props.children} */}
        {/* {Children.only(this.props.children)} */}
        <p>Total Children: {Children.count(this.props.children)}</p>
      
        {buttons}
      </div>
    )
  }
}

export default Parent;