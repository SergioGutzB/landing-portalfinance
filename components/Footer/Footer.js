import React from 'react';
import a from 'next/link';
import { styles } from './Footer-style';
import { variables } from '../../styles/variables';
import Mail from '../../static/images/email2.svg';
import Radium from 'radium';
import TouchableHighlight from '../TouchableHighlight/TouchableHighlight';

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
          <TouchableHighlight>
            <a href='https://www.facebook.com/portalfinance/' target="_blank">
              <div style={styles.element_social}>
                <div style={styles.icon_area}>
                  <img src={fb} style={styles.social_icon}/>
                </div>
              </div>
            </a>
          </TouchableHighlight>
          <TouchableHighlight>
            <a href='https://twitter.com/portalfinance?lang=en' target="_blank">
              <div style={styles.element_social}>
                <div style={styles.icon_area}>
                  <img src={tw} style={styles.social_icon}/>
                </div>
              </div>
            </a>
          </TouchableHighlight>
          <TouchableHighlight>
            <a href='https://www.instagram.com/portalfinance/?hl=en' target="_blank">
              <div style={styles.element_social}>
                <div style={styles.icon_area}>
                  <img src={inst} style={styles.social_icon}/>
                </div>
              </div>
            </a>
          </TouchableHighlight>
        </div>
      </div>
      )
    }
  }

export default Radium(Footer);

