import React from 'react';
import { styles } from './Footer-style';
import { variables } from '../../styles/variables';
import Mail from '../../static/images/email2.svg';
import Radium from 'radium';

const fb = '../../static/images/facebook.png';
const tw = '../../static/images/twitter.png';
const inst = '../../static/images/instagram.png';

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
        <div style={styles.social}>
          <div style={styles.element_social}>
            <div style={styles.icon_area}>
              <img src={fb} style={styles.social_icon}/>
            </div>
          </div>
          <div style={styles.element_social}>
            <div style={styles.icon_area}>
              <img src={tw} style={styles.social_icon}/>
            </div>
          </div>
          <div style={styles.element_social}>
            <div style={styles.icon_area}>
              <img src={inst} style={styles.social_icon}/>
            </div>
          </div>
        </div>
      </div>
      )
    }
  }

export default Radium(Footer);

