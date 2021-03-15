# inhibit

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/@claritycodeweb/inhibit.svg)](https://www.npmjs.com/package/@claritycodeweb/inhibit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@claritycodeweb/inhibit.svg)](https://www.npmjs.com/package/@claritycodeweb/inhibit)

## Inhibit

Heroku is super cool platform to host your projects for free. If an app has a free web dyno, and that dyno receives no web traffic in a 30-minute period, it will sleep. Here react-inhibit can help a lot it will display loading indicator until machine wakes up. When server is awake it will push to display website content.  

## Install

```bash
npm install --save @claritycodeweb/inhibit
```

## Live example
[Link to example](https://claritycodeweb.github.io/inhibit/)

## Simple Usage

```jsx
import React from 'react'

import { Inhibit as LinkTo } from 'inhibit'
import 'inhibit/dist/index.css'

const App = () => {
  return (
      <LinkTo
        to={'https://your_heroku_app.herokuapp.com/'}
        name='Your Heroku App Name'
      >
        <span>Link</span>
      </LinkTo>
  )
}
```

## Advance Usage

```jsx
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
        to={'https://your_heroku_app.herokuapp.com/'}
        name='Your Heroku App Name'
      >
        <span>link default</span>
      </LinkTo>
      <LinkTo
        to={'https://your_heroku_app.herokuapp.com/'}
        name='Your Heroku App Name'
        Spinner={SpinnerStyle}
      >
        <span>link example with custom spinner 1</span>
      </LinkTo>
      <LinkTo
        to={'https://your_heroku_app.herokuapp.com/'}
        name='Your Heroku App Name'
        Spinner={SpinnerClass}
      >
        <span>link example with custom spinner 2</span>
      </LinkTo>
    </div>
  )
}
```

## License

MIT © [Rafał Pisarczyk](https://github.com/claritycodeweb)
