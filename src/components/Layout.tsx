import * as React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import Head from 'next/head'
import './Layout.css'
import { compose } from 'recompose'

import { withAuthentication, withAuthorization } from './Session'

const Layout: React.FunctionComponent = props => (
  <div id="layout">
    {/*language=PostCSS*/}
    <style jsx global>
      {`
          #layout {
          //background-color: darkolivegreen;
          }
      `}
    </style>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <Header/>
    <main>
      {props.children}
    </main>
    <Footer/>
  </div>
)

const AppWithAuthentication = compose(
  withAuthentication,
  withAuthorization(false),
)(Layout)
const AppWithAuthorization = compose(
  withAuthentication,
  withAuthorization(true),
)(Layout)
export { AppWithAuthentication, AppWithAuthorization }
