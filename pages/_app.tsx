import '../styles/index.css';
import App from 'next/app';
import NProgressHandler from 'components/NProgressHandler';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <NProgressHandler />
        <Component {...pageProps} />
      </>
    );
  }
}
export default MyApp;
