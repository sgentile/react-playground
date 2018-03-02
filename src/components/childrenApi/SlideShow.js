import React, { Component, Children } from 'react';

class SlideShow extends Component {
  //track the slides
  state = {
    total: 0,
    current: 0
  }

  //set the initial state
  componentDidMount() {
    const {children} = this.props;
    //use the children API
    this.setState({
      total: Children.count(children)
    });
    this.interval = setInterval(this.showNext, 3000);
  }

  //clean up 
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showNext = () => {
    const { total, current } = this.state;
    this.setState({
      current: current + 1 === total ? 0 : current + 1
    })
  }

  render(){
    const {children} = this.props;
    return (
      <div className="slideshow-container">
        <h4>Example Childen API Component</h4>
        <div className="slideshow">
          {Children.toArray(children)[this.state.current]}
        </div>
      </div>
    )
  }
}

export default SlideShow;