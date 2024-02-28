import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dashboard } from './routes/Dashboard'
import { ContextGlbal } from './context/Context'
import { NavBar } from './components/NavBar'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  }
])

function App() {
  return (
    <section className='w-full h-svh pt-[70px] overflow-hidden'>
      <NavBar />

      <section className='w-full h-full overflow-auto scrollbar-none'>
        <ContextGlbal>
          <RouterProvider router={router} />
        </ContextGlbal>
      </section>
    </section>
  )
}

export default App
