import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import InternalPanel from './InternalPanel';

import Locale from '../../locale/Locale';

class Panel extends Component {
  constructor(props, context) {
    super(props, context);

    this.locale = new Locale('en');
  }
  static childContextTypes = {
    locale: PropTypes.object
  }

  getChildContext() {
    return { locale: this.locale }
  }

  componentWillUpdate(nextProps, nextState) {
    this.locale.setLanguage(nextState.currentLocale);
  }

  toggleLocale(){
    this.setState({
      currentLocale: this.state.currentLocale === 'en' ? 'sp' : 'en'
    })
  }

  state = {
    currentLocale: 'en'
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

