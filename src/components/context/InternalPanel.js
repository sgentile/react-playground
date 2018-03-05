import React, { Component } from 'react';
import ContentPanel from './ContentPanel';
import WithLocaleHOC from './WithLocaleHOC';

class InternalPanel extends Component {
  shouldComponentUpdate(){
    return false;
  }
  render() {
    return (
      <span>
        <ContentPanel/>
        {this.props.locale.strings.salutation} (InternalPanel)
      </span>
    )
  }
}

//export default InternalPanel;


//demo we can plug this in anywhere...with HOC component....
export default WithLocaleHOC(InternalPanel);