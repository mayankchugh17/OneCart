import UserContext from './context/userContext.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './context/authContext.jsx' 


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider>
      <UserContext>
        <App />
      </UserContext>
    </AuthContextProvider>
  </BrowserRouter>,
)
