import React from 'react';
import { Provider } from 'mobx-react';
import { styles } from '../styles/index.js';
import Header from '../components/Header/Header';
import Wwd from '../components/Wwd/Wwd';
import Home from '../components/Home/Home';
import Team from '../components/Team/Team';
import Radium, { StyleRoot } from 'radium';
import Footer from '../components/Footer/Footer';
import Partners from '../components/Partners/Partners';

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
    }
  }

  componentDidMount () {
    scrollToComponent = require('react-scroll-to-component');
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    let scrollTop = event.srcElement.body.scrollTop;
    let itemTranslate = scrollTop;

    this.setState({
      transform: itemTranslate
    })
    //console.log("ref: ", this.refs.home)
  }

  gotoTo = (evt, ref) => {
    console.log("goto Team")
    scrollToComponent(ref, {align: 'top', duration: 500, ease:'inCirc'});
  }

  render () {
    const { userAgent } = this.props;
    const { title  } = this.state
    const actions = {
      gotoTeam: (e) => this.gotoTo(e, this.refs.team_ref),
      gotoHome: (e) => this.gotoTo(e, this.refs.home_ref),
      gotoWwd: (e) => this.gotoTo(e, this.refs.wwd_ref),
      gotoPartners: (e) => this.gotoTo(e, this.refs.partners_ref),
    }
    return (
      <StyleRoot>
        <Provider userAgent={userAgent}>
          <div>
            <Header ref="team_home" actions={actions} />
            <Home ref="home_ref"/>
            <Wwd ref="wwd_ref"/>
            <Partners ref="partners_ref"/>
            <Team ref="team_ref"/>
            <Footer />
            {/*
            */}
          </div>
        </Provider>
      </StyleRoot>
    )
  }
}
