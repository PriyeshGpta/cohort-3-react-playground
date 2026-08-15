import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App'
import { AuthProvider } from './app/providers/AuthProvider'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
)
