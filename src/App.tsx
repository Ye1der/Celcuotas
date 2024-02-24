import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dashboard } from './routes/Dashboard'
import { ContextStyles } from './context/Context'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  }
])

function App() {
  return(
    <ContextStyles>
      <RouterProvider router={router} />
    </ContextStyles>
  ) 
}

export default App
