import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ScrollPosition extends Component {
  state = {
    position: null
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.setState({
      position: scrollTop
    })
  }

  render() {
    return (
      <div className="sticky">
       { this.props.children(this.state.position) }
      </div>
    )
  }
}

ScrollPosition.propTypes = {
  children: PropTypes.func.isRequired
}

export default ScrollPosition;