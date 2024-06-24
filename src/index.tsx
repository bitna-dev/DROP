import { Global } from '@emotion/react'
import globalStyle from '@styles/globalStyle'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <>
    <BrowserRouter>
      <Global styles={globalStyle} />
      <App />
    </BrowserRouter>
  </>,
)
