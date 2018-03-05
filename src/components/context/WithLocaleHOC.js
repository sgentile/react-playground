import React, { Component } from 'react';
import PropTypes from 'prop-types';


const WithLocaleHOC = (WrappedComponent) => {
  return class WithLocaleHOC extends Component {
    static contextTypes = {
      locale: PropTypes.object
    }
    componentDidMount() {
      this.context.locale.subscribe(() => this.forceUpdate());
    }

    render(){
      const { locale } = this.context;      
      return (
        <div>
          <WrappedComponent {...this.props} locale={locale} /> (wrapped)
        </div>
        
      )
    }
  }
}

export default WithLocaleHOC;