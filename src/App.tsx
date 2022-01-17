import { CSSProperties } from 'react'
import './App.css'
import { IButtonConfig } from './vite-env'

const DEFAULT_STYLE: CSSProperties = {
  width: '80%',
  height: '90%',
  border: 'none',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: 'auto',
  boxShadow: '0 0 #000, 0 0 #000, 0 25px 50px -12px rgba(0, 0, 0, .25)',
}

const App: React.FC<{ btnKey: string }> = ({ btnKey }) => {
  const curBtnConfig: IButtonConfig = logseq.settings?.buttons?.find((_config: IButtonConfig) => _config.key === btnKey)

  return (
    <>
      <div className="mask" onClick={() => logseq.hideMainUI()}></div>
      <iframe className="iframe" src={curBtnConfig.href} style={curBtnConfig.style || DEFAULT_STYLE}></iframe>
    </>
  )
}

export default App
