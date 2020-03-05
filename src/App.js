import React, { Fragment } from 'react'
import Header from './components/header'
import LeftCol from './components/left-col'
import ProfileContent from './components/profile_content'
import Footer from './components/footer'

function App () {
  return (
    <Fragment>
      <Header />
      <LeftCol />
      <ProfileContent />
      <Footer />
    </Fragment>
  )
}

export default App
