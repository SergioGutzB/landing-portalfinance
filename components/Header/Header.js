import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TouchableHighlight from '../../components/TouchableHighlight/TouchableHighlight';
import { styles } from './Header-style';
import Radium from 'radium';
import { Motion, spring } from 'react-motion';
import Logo from '../../static/images/logo.svg';

const springConfig = {stiffness: 170, damping: 26};

const logo =  '../../static/images/logo-02.png';

if (!process.tapEventInjected) {
  injectTapEventPlugin()
  process.tapEventInjected = true
}

class Header extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      height: 0,
      width: 0,
      start: 100,
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({offset: nextProps.offset})
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
    this.updateWindowDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  componentWillMount(){
    this.updateWindowDimensions();
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render () {
    const { offset, height } = this.state;
    //let offsetScroll = offset? (((offset*-1) < height) ? Math.abs(offset)/height : height) : 0  ;
    let offsetScroll = offset? ((Math.abs(offset) < (height/1.5)) ? 0 : 1) : 0  ;
    let padding = !!offsetScroll? 0 : 45;
    let logoHeight = !!offsetScroll? 55 : 95;
    let logoWidth = !!offsetScroll? 137 : 237;

    const style = {
      opacity: spring(offsetScroll),
      padding: spring(padding),
      height: spring(!!offsetScroll? 80 : 100),
      logoWidth: logoWidth,
      logoHeight: logoHeight,
    }

    console.log("offset: ", offset, " height: ", height, " offsetScroll: ", offsetScroll, " operation: ", offsetScroll/height)
    console.log(style);

    return (
      <div style={styles.box}>
        <Motion style={style}>
          {({opacity, padding, logoHeight, logoWidth, height}) =>
          <div style={Object.assign({}, styles.container, {
            backgroundColor: 'rgba(0,76,131,'+opacity+')',
            paddingTop: padding,
            paddingBottom: padding,
            height: height,

          })}>
              <div style={styles.container.left}>
                <Logo style={Object.assign({},styles.logo, {height: logoHeight, width: logoWidth})} />
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
          }
        </Motion>
      </div>
    )
  }
}
export default Radium(Header);
