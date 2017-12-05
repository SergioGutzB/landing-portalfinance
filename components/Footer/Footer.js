import React from 'react';
import { styles } from './Footer-style';
import { variables } from '../../styles/variables';
import Mail from '../../static/images/email2.svg';
import Radium from 'radium';

class Footer extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {

    return (
      <div style={styles.footer}>
        <div style={styles.center}>
          <p style={styles.copyright}>Copyright © 2017, PortalFinance</p>
        </div>
      </div>
    )
  }
}

export default Radium(Footer);

