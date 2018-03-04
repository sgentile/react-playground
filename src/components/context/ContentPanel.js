import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ContentPanel extends Component {
  static contextTypes = {
    locale: PropTypes.object
  }
  render(){
    const { locale } = this.context;    
    return (
      <div>
        {locale.salutation}
      </div>
    )
  }
}

export default ContentPanel;