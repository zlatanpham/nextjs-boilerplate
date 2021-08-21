import '../styles/index.css'
import React from 'react'
import App from 'next/app'
import NProgressHandler from 'components/NProgressHandler'
import Header from 'components/Header'
import Footer from 'components/Footer'
import tw from 'twin.macro'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <div css={tw`flex min-h-screen flex-col justify-between`}>
        <NProgressHandler />
        <main>
          <Header />
          <div css={tw`max-w-3xl mx-auto py-20`}>
            <Component {...pageProps} />
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}
export default MyApp
