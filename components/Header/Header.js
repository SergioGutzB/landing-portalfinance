import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Head from 'next/head'
import global from '../../styles/global.scss';
import { styles } from './Header-style';

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
          <p>Logo</p>
        </div>
      </div>
    )
  }
}
