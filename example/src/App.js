import React from 'react'

import { Inhibit as LinkTo } from 'inhibit'
import 'inhibit/dist/index.css'

const SpinnerStyle = ({ name, to }) => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: 'lightgrey',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <span>
        {name} {to}
      </span>
    </div>
  )
}

const SpinnerClass = ({ name, to }) => {
  return (
    <div className={'spinner'}>
      <span>
        {name} {to}
      </span>
    </div>
  )
}

const App = () => {
  return (
    <div className="links">
      <LinkTo
        to={'https://claritycode.herokuapp.com/'}
        name='ClarityCode'
        className="link"
      >
        <span>link default</span>
      </LinkTo>
      <LinkTo
        to={'https://claritycode.herokuapp.com/'}
        name='ClarityCode'
        Spinner={SpinnerStyle}
        className="link"
      >
        <span>link example with custom spinner 1</span>
      </LinkTo>
      <LinkTo
        to={'https://claritycode.herokuapp.com/'}
        name='ClarityCode'
        Spinner={SpinnerClass}
        className="link"
      >
        <span>link example with custom spinner 2</span>
      </LinkTo>
    </div>
  )
}

export default App
