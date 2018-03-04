import React, { Component, Children } from 'react';
import './slideshow.css';

class SlideShow extends Component {
  //track the slides
  state = {
    total: 0,
    current: 0,
    in: true
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
    //https://www.alt-codes.net/bullet_alt_codes.php
    const bullets = Array(this.state.total).fill("⦾");
    bullets[this.state.current] = "⦿";
    const duration = 1000;
    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0,
    }
    const transitionStyles = {
      entering: { opacity: 0 },
      entered:  { opacity: 1 },
    }
    return (
      <div className="slideshow-container">
        <h4>Example Childen API Component</h4>
        <div className="slideshow">
          <div>{bullets}</div>          
            {Children.toArray(children)[this.state.current]}          
        </div>
      </div>
    )
  }
}

export default SlideShow;