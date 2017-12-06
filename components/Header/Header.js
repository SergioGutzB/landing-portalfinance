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

let offset = 0;
let height = 0;
let width = 0;

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
    offset = Math.abs(nextProps.offset);
  }

  componentWillMount(){
    offset = Math.abs(this.props.offset);
    this.updateWindowDimensions();
  }

  updateWindowDimensions = () => {
    width = window.innerWidth;
    height = window.innerHeight;
  }

  render () {
    //console.log(offset);
    //let offsetScroll = offset? ((offset < 220) ? 0 : ((offset-220)/100 < 1)? (offset-220)/100 : 1) : 0  ;
    //let padding = !!offsetScroll? (45 - offsetScroll*45) : 45;
    //let logoHeight = !!offsetScroll? ((95 - offsetScroll*95) > 55? (95 - offsetScroll*95) : 55)  : 95;
    //let logoWidth = !!offsetScroll? ((237 - offsetScroll*237) > 137? (237 - offsetScroll*237) : 137) : (width >= 768 && width < 1024 )? ((237 - offsetScroll*237) > 150? (237 - offsetScroll*237) : 150) : 237;
    let offsetScroll = offset? ((offset < (220)) ? 0 : 1) : 0  ;
    let padding = !!offsetScroll? 0 : 45;
    let logoHeight = !!offsetScroll? 55 : 95;
    let logoWidth = !!offsetScroll? 137 : (width >= 768 && width < 1024 )? 150 : 237;


    //const style = {
      //opacity: (offsetScroll),
      //padding: (padding),
      //height: !!offsetScroll? 80 : 100,
      //logoWidth: logoWidth,
      //logoHeight: logoHeight,
    //}

    const style = {
      opacity: spring(offsetScroll),
      padding: spring(padding),
      height: spring(!!offsetScroll? 80 : 100),
      logoWidth: spring(logoWidth),
      logoHeight: spring(logoHeight),
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
        <Motion style={style}>
          {({opacity, padding, logoHeight, logoWidth, height}) =>
          <div style={Object.assign({}, styles.container, {
            backgroundColor: 'rgba(0,76,131,'+ opacity+')',
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
        </Motion>
      </div>
    )
  }
}
export default Radium(Header);
