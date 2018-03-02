import React from 'react';

const busyIndicator = (WrappedComponent) => {
  return class Loader extends React.Component {
    componentWillReceiveProps(nextProps) {
      console.log("current props", this.props);
      console.log("nextProps", nextProps);      
    }
    componentDidMount() {
      this.startTime = Date.now();
    }
    componentWillUpdate() {
      this.endTime = Date.now();
    }
    render() {
      const { isSearching } = this.props;
      const myProps = {
        loadTime : ((this.endTime - this.startTime)/1000).toFixed(2)
      }
      return (
        isSearching ? <span className="fa fa-3x fa-spin fa-spinner"></span> : <WrappedComponent {...this.props} {...myProps} />
      )
    }
  }
}

export default busyIndicator; 