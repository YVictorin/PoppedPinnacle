import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'
import ErrorBoundary from './components/boundaries/ErrorBoundary.jsx';

createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <BrowserRouter>
    <ErrorBoundary fallback="Some error has occurred">
       <App/>
    </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
)
