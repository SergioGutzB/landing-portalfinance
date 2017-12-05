import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { styles } from '../styles/index.js';
import Header from '../components/Header/Header';
import Wwd from '../components/Wwd/Wwd';
import Home from '../components/Home/Home';
import Team from '../components/Team/Team';
import Radium, { StyleRoot } from 'radium';
import Footer from '../components/Footer/Footer';
import Partners from '../components/Partners/Partners';
import Makes from '../components/Makes/Makes';
import InfoWwd from '../components/InfoWwd/InfoWwd';
import InfoPartners from '../components/InfoPartners/InfoPartners';
import Contact from '../components/Contact/Contact';


let scrollToComponent;

export default class Index extends React.Component {
  static async getInitialProps({req, res, query, pathname, asPath, jsonPageRes  }) {
    const isServer = !!req;
    let userAgent;
    if (process.browser) {
      userAgent = navigator.userAgent;
    } else {
      userAgent = req.headers['user-agent'];
    }
    return {isServer, userAgent};
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      title: "Portal Finance",
      transform: null,
      offsetScroll: 0,
    }
  }

  componentDidMount () {
    scrollToComponent = require('react-scroll-to-component');
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getOffset = (element) => {
    let bounding = element.getBoundingClientRect();
    return {
      top: bounding.top + document.body.scrollTop,
      left: bounding.left + document.body.scrollLeft
    };
  }

  handleScroll = () => {
    let startElement = ReactDOM.findDOMNode(this.refs.home_ref);
    let offset = this.getOffset(startElement)
    this.setState({offsetScroll:offset.top})
  }

  gotoTo = (evt, ref, offset) => {
    scrollToComponent(ref, {duration: 500, ease:'inCirc', offset: offset, align: 'top'});
  }

  render () {
    const { userAgent } = this.props;
    const { title  } = this.state
    const actions = {
      gotoHome: (e) => this.gotoTo(e, this.refs.home_ref, 0),
      gotoMakes: (e) => this.gotoTo(e, this.refs.makes_ref, -55),
      gotoWwd: (e) => this.gotoTo(e, this.refs.wwd_ref, -100),
      gotoPartners: (e) => this.gotoTo(e, this.refs.partners_ref, -150),
      gotoTeam: (e) => this.gotoTo(e, this.refs.team_ref, -10),
      gotoInfoPartners: (e) => this.gotoTo(e, this.refs.infoPartners_ref, -80),
      gotoInfoWwd: (e) => this.gotoTo(e, this.refs.infoWwd_ref, -60),
    }
    return (
      <StyleRoot>
        <Provider userAgent={userAgent}>
          <div>
            <Header ref="header_ref" actions={actions} offset={this.state.offsetScroll}/>
            <Home ref="home_ref" actions={actions}/>
            <Makes ref="makes_ref" />
            <Wwd ref="wwd_ref" actions={actions}/>
            <Partners ref="partners_ref" actions={actions}/>
            <InfoWwd ref="infoWwd_ref" />
            <InfoPartners ref="infoPartners_ref" />
            <Team ref="team_ref"/>
            <Contact/>
            <Footer />
            {/*
            */}
          </div>
        </Provider>
      </StyleRoot>
    )
  }
}
