import { Global } from '@emotion/react'
import globalStyle from '@styles/globalStyle'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import App from './App'
import { AuthContextProvider } from './contexts/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <Global styles={globalStyle} />
      <App />
    </BrowserRouter>
  </AuthContextProvider>,
)
