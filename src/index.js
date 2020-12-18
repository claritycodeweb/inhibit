import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.module.css'

const Spinner = ({ to }) => {
  useEffect(() => {}, [])
  return (
    <div className={styles.center}>
      <div className={styles.spinner}>
        <div />
        <div />
      </div>
      <span className={styles.url}>{to}</span>
    </div>
  )
}

function copyStyles(source, target) {
  Array.from(source.styleSheets).forEach((styleSheet) => {
    // For <style> elements
    let rules
    try {
      rules = styleSheet.cssRules
    } catch (err) {
      console.error(err)
    }
    if (rules) {
      const newStyleEl = source.createElement('style')

      // Write the text of each rule into the body of the style element
      Array.from(styleSheet.cssRules).forEach((cssRule) => {
        const { cssText, type } = cssRule
        let returnText = cssText
        // Check if the cssRule type is CSSImportRule (3) or CSSFontFaceRule (5) to handle local imports on a about:blank page
        // '/custom.css' turns to 'http://my-site.com/custom.css'
        if ([3, 5].includes(type)) {
          returnText = cssText
            .split('url(')
            .map((line) => {
              if (line[1] === '/') {
                return `${line.slice(0, 1)}${
                  window.location.origin
                }${line.slice(1)}`
              }
              return line
            })
            .join('url(')
        }
        newStyleEl.appendChild(source.createTextNode(returnText))
      })

      target.head.appendChild(newStyleEl)
    } else if (styleSheet.href) {
      // for <link> elements loading CSS from a URL
      const newLinkEl = source.createElement('link')

      newLinkEl.rel = 'stylesheet'
      newLinkEl.href = styleSheet.href
      target.head.appendChild(newLinkEl)
    }
  })
}

export const ExampleComponent = ({ text, to }) => {
  const onClick = (e) => {
    e.preventDefault()
    var win = window.open('', '_blank')
    win.document.write(
      `<html>
        <head></head>
        <body>
        
          <script type='text/javascript'>
            const func = () => {
              // window.location.href = '${to}'
            }
      
            setTimeout(func, 200);
          </script>
        </body>
      </html>`
    )

    win.onload = function () {
      copyStyles(window.document, win.document)
      ReactDOM.render(<Spinner to={to} />, win.document.querySelector('body'))
    }

    win.document.close()

    // window.open(to, '_blank')
    // window
    //   .fetch('https://www.google.com/', {
    //     mode: 'no-cors',
    //     credentials: 'same-origin'
    //   })
    //   .then((res) => {
    //     if (res.ok) {
    //       console.info('can by open')
    //     } else {
    //       console.log('res', res)
    //       throw new Error({
    //         status: res.status,
    //         ok: res.ok
    //       })
    //     }
    //   })
  }

  return (
    <a href={to} onClick={onClick} className={styles.test}>
      {text}
    </a>
  )
}
