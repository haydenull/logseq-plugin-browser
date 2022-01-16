import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { IButtonConfig } from './vite-env'

const App: React.FC<{ btnKey: string }> = ({ btnKey }) => {
  const curBtnConfig: IButtonConfig = logseq.settings?.buttons?.find((_config: IButtonConfig) => _config.key === btnKey)

  return (
    <>
      <div className="mask" onClick={() => logseq.hideMainUI()}></div>
      <iframe className="iframe" src={curBtnConfig.href} style={curBtnConfig.style}></iframe>
    </>
  )
}

export default App
