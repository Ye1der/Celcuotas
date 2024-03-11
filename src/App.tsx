import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dashboard } from './routes/Dashboard'
import { ContextGlbal } from './context/Context'
import { NavBar } from './components/NavBar'
import { Store } from './routes/Store'
import { Footer } from './components/dashboard/Footer'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/store",
    element: <Store/>
  }
])

function App() {
  return (
    <section className='w-full h-svh lg:pt-[70px] overflow-hidden'>
      <NavBar />

      <section className='w-full h-full overflow-auto scrollbar-none'>
        <ContextGlbal>
          <RouterProvider router={router} />
        </ContextGlbal>
        <Footer/>
      </section>
    </section>
  )
}

export default App
