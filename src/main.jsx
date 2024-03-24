import React from 'react'
import ReactDOM from 'react-dom/client'
import { App as Canvas } from './Canvas.jsx'
import './index.css'
import Overlay from './Overlay.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Canvas />
    <Overlay />
  </>
)
