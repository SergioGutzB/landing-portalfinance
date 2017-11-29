import React from 'react';
import { Provider } from 'mobx-react';
import { styles } from '../styles/index.js';
import Header from '../components/Header/Header';

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
    }
  }

  render () {
    const { userAgent } = this.props;
    const { title  } = this.state
    return (
      <Provider userAgent={userAgent}>
        <div>
          <Header />
          <h1 style={styles.title}>{title}</h1>
        </div>
      </Provider>
    )
  }
}
