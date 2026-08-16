import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App'
import { AuthContextProvider } from './app/providers/AuthContextProvider'

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
)
