import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import styles from './styles.module.css'
import { copyStyles } from './utils'

export const DefaultSpinner = ({ to, name }) => {
  useEffect(() => {}, [])
  return (
    <div className={styles.spinner}>
      <span className={styles.spinner__url}>Wait for {name || to}</span>
    </div>
  )
}

export const Inhibit = ({ to, name, children, Spinner = DefaultSpinner }) => {
  const onClick = (e) => {
    e.preventDefault()
    var win = window.open('', '_blank')

    win.document.write(
      `<html>
        <head></head>
        <body>

         <div class="inhibit"></div>
        
          <script type='text/javascript'>
            const func = () => {
              window.location.href = '${to}'
            }

            setTimeout(func, 200);
          </script>
        </body>
      </html>`
    )

    win.onload = function () {
      copyStyles(window.document, win.document)
      ReactDOM.render(
        <Spinner to={to} name={name} />,
        win.document.querySelector('.inhibit')
      )
    }

    win.document.close()
  }

  return (
    <a href={to} onClick={onClick} className={styles.test}>
      {children}
    </a>
  )
}

Inhibit.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string
}
