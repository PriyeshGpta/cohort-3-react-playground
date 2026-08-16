import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App'
import { BrowserRouter } from 'react-router'
import { AuthContextProvider } from './app/providers/AuthContextProvider'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>
)
