import Document, { Head, Main, NextScript } from 'next/document'
import global from '../styles/global.scss';

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    return { }
  }

  render () {
    return (
      <html>
        <Head>
          <title>Portal Finance Inc</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="shortcut icon" href="../static/images/favicon.ico" />
        </Head>
        <style dangerouslySetInnerHTML={{ __html: global }} />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
