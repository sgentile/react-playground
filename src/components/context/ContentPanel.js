import React, {Component} from 'react';
import PropTypes from 'prop-types';
import WithLocaleHOC from './WithLocaleHOC';

// with preferred HOC approach...
class ContentPanel extends Component {
  static propTypes = {
    locale: PropTypes.object
  }
  render(){
    const { locale } = this.props;  
    return (
      <span>
        {locale.strings.salutation} (Content Panel)
      </span>
    )
  }
}
export default WithLocaleHOC(ContentPanel);