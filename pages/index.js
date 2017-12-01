import React from 'react';
import { Provider } from 'mobx-react';
import { styles } from '../styles/index.js';
import Header from '../components/Header/Header';
import Wwd from '../components/Wwd/Wwd';
import Home from '../components/Home/Home';
import Team from '../components/Team/Team';
import Radium, { StyleRoot } from 'radium';
import Footer from '../components/Footer/Footer';

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

  render () {
    //console.log("scroll: ", this.state.transform)
    const { userAgent } = this.props;
    const { title  } = this.state
    return (
      <StyleRoot>
        <Provider userAgent={userAgent}>
          <div>
            <Header/>
            <Home ref="home" />
            {/*
            <Wwd/>
            <Team />
            <Footer />
            */}
          </div>
        </Provider>
      </StyleRoot>
    )
  }
}
