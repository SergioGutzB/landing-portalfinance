import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Head from 'next/head'
import TouchableHighlight from '../../components/TouchableHighlight/TouchableHighlight';
import global from '../../styles/global.scss';
import { styles } from './Header-style';

const logo =  '../../static/images/logo-02.png';

if (!process.tapEventInjected) {
  injectTapEventPlugin()
  process.tapEventInjected = true
}

export default class Header extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {
    return (
      <div>
        <Head>
          <title>{ this.props.title }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <style dangerouslySetInnerHTML={{ __html: global }} />

        <div style={styles.container}>
          <div style={styles.container.left}>
            <img src={logo} style={styles.logo} />
          </div>

          <div style={styles.center}></div>

          <div style={styles.container.right}>
            <ul style={styles.menu}>
              <TouchableHighlight>
                <li style={styles.menu.item}>HOME</li>
              </TouchableHighlight>
              <TouchableHighlight>
                <li style={styles.menu.item}>WHAT WE DO</li>
              </TouchableHighlight>
              <TouchableHighlight>
                <li style={styles.menu.item}>PARTNERS</li>
              </TouchableHighlight>
              <TouchableHighlight>
                <li style={styles.menu.item}>TEAM</li>
              </TouchableHighlight>
              <TouchableHighlight>
                <li style={styles.menu.item}>CONTACT</li>
              </TouchableHighlight>
            </ul>
          </div>

        </div>
      </div>
    )
  }
}
