import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TouchableHighlight from '../../components/TouchableHighlight/TouchableHighlight';
import { styles } from './Header-style';
import Radium from 'radium';
import { Motion, spring } from 'react-motion';
import Logo from '../../static/images/logo.svg';
import { variables } from '../../styles/variables';

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
      active: "HOME"
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
    const { height, width } = this.state;
    const offset = Math.abs(this.state.offset)
    let offsetScroll = offset? ((offset < 220) ? 0 : ((offset-220)/100 < 1)? (offset-220)/100 : 1) : 0  ;
    let padding = !!offsetScroll? (45 - offsetScroll*45) : 45;
    let logoHeight = !!offsetScroll? ((95 - offsetScroll*95) > 55? (95 - offsetScroll*95) : 55)  : 95;
    let logoWidth = !!offsetScroll? ((237 - offsetScroll*237) > 137? (237 - offsetScroll*237) : 137) : (width >= 768 && width < 1024 )? ((237 - offsetScroll*237) > 150? (237 - offsetScroll*237) : 150) : 237;

    const style = {
      opacity: (offsetScroll),
      padding: (padding),
      height: !!offsetScroll? 80 : 100,
      logoWidth: logoWidth,
      logoHeight: logoHeight,
    }

    const menu = (text, action) => {
      const change = () => {
        this.setState({active: text});
        action()
      }
      const active = (this.state.active === text)? true : false;

      const styleActive = {
        size: spring(active? 2 : 0, springConfig),
        opacity: spring(active? 1 : 0, springConfig),
      }

      return (
        <Motion style={styleActive}>
          {({size, opacity, color}) =>
            <li style={Object.assign({}, styles.menu.item, active? {
                borderBottomSize: size,
                borderBottomStyle: 'solid',
                borderBottomColor: 'rgba(0, 186, 186,'+opacity+')',
                color: variables.mint,
              }
              : {
                color: 'white'
              })}
              onClick={() => change()}
            >{text}</li>
          }
        </Motion>
      )
    }

    return (
      <div style={styles.box}>
          <div style={Object.assign({}, styles.container, {
            backgroundColor: 'rgba(0,76,131,'+style.opacity+')',
            paddingTop: style.padding,
            paddingBottom: style.padding,
            height: style.height,
          })}>
              <div style={styles.container.left}>
                <Logo style={Object.assign({},styles.logo, {height: style.logoHeight, width: style.logoWidth})} />
              </div>

              <div style={styles.center}></div>

              <div style={styles.container.right}>
                <ul style={styles.menu}>
                  <TouchableHighlight>
                    { menu('HOME', this.props.actions.gotoHome)}
                  </TouchableHighlight>
                  <TouchableHighlight>
                    { menu('WHAT WE DO', this.props.actions.gotoWwd)}
                  </TouchableHighlight>
                  <TouchableHighlight>
                    { menu('PARTNERS', this.props.actions.gotoPartners)}
                  </TouchableHighlight>
                  <TouchableHighlight>
                    { menu('TEAM', this.props.actions.gotoTeam)}
                  </TouchableHighlight>
                  <TouchableHighlight>
                    { menu('CONTACT', this.props.actions.gotoContact)}
                  </TouchableHighlight>
                </ul>
              </div>
            </div>
          }
      </div>
    )
  }
}
export default Radium(Header);
