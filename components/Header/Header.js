import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TouchableHighlight from '../../components/TouchableHighlight/TouchableHighlight';
import { styles } from './Header-style';
import Radium from 'radium';

const logo =  '../../static/images/logo-02.png';

if (!process.tapEventInjected) {
  injectTapEventPlugin()
  process.tapEventInjected = true
}

class Header extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {
    return (
      <div style={styles.box}>
        <div style={styles.container}>
          <div style={styles.container.left}>
            <img src={logo} style={styles.logo} />
          </div>

          <div style={styles.center}></div>

          <div style={styles.container.right}>
            <ul style={styles.menu}>
              <TouchableHighlight>
                <li style={styles.menu.item} onClick={() => this.props.actions.gotoHome()}>HOME</li>
              </TouchableHighlight>
              <TouchableHighlight>
                <li style={styles.menu.item} onClick={() => this.props.actions.gotoWwd()}>WHAT WE DO</li>
              </TouchableHighlight>
              <TouchableHighlight>
                <li style={styles.menu.item} onClick={() => this.props.actions.gotoPartners()}>PARTNERS</li>
              </TouchableHighlight>
              <TouchableHighlight>
                <li style={styles.menu.item} onClick={() => this.props.actions.gotoTeam()}>TEAM</li>
              </TouchableHighlight>
              <TouchableHighlight>
                <li style={styles.menu.item} >CONTACT</li>
              </TouchableHighlight>
            </ul>
          </div>

        </div>
      </div>
    )
  }
}
export default Radium(Header);
