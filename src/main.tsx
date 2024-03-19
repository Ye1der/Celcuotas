import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './components/animations.css'
import { ContextGlbal } from './context/Context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ContextGlbal>
    <App />
  </ContextGlbal>
)
