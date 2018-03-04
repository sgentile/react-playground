import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import InternalPanel from './InternalPanel';

import en from './en.json';
import sp from './sp.json';

const locales = {en, sp};

class Panel extends Component {
  state = {
    currentLocale: 'en'
  }
  static childContextTypes = {
    locale: PropTypes.object
  }

  getChildContext() {
    return { locale: locales[this.state.currentLocale] }
  }

  toggleLocale(){
    this.setState({
      currentLocale: this.state.currentLocale === 'en' ? 'sp' : 'en'
    })
  }

  render() {
    return(
      <div>
          <Link to="/">Home</Link>
          <div>
            <button onClick={() => this.toggleLocale()}>Toggle Locale</button>
          </div>
          <div className="panel">
            <InternalPanel />
          </div>
      </div>
    )
  }
}

export default Panel;