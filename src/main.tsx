import "@logseq/libs"
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { IButtonConfig } from './vite-env'

// https://tablericons.com/
logseq.ready(() => {
  console.log('[faiz:] === logseq-plugin-browser loaded ===')

  logseq.setMainUIInlineStyle({
    position: 'fixed',
    zIndex: 11,
  })
  logseq.provideModel({
    // TODO: icon type
    show(e) {
      const key = e.dataset.faizKey
      // const style = e.dataset.faizStyle
      // logseq.provideStyle(`#logseq-plugin-browser_iframe {position: absolute; margin: auto; top: 0; bottom: 0; left: 0; right: 0; ${style}}`)
      console.log('[faiz:] === key', key, e)
      // window.location.href = href
      renderApp(key)
      logseq.showMainUI()
    },
  })

  logseq.settings?.buttons?.forEach((btnConfig: IButtonConfig) => {
    logseq.App.registerUIItem('toolbar', {
      key: btnConfig.key,
      template: `<a data-on-click="show" data-faiz-key="${btnConfig.key}" class="button"><i class="ti ${btnConfig.icon}"></i></a>`,
    })
  })

})

function renderApp(btnKey: string) {
  ReactDOM.render(
    <React.StrictMode>
      <App btnKey={btnKey} />
    </React.StrictMode>,
    document.getElementById('root')
  )
}
