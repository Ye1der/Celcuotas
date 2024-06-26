import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './components/styles/animations.css'
import { ContextGlbal } from './context/Context.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Dashboard } from './routes/Dashboard.tsx'
import { Store } from './routes/Store.tsx'
import { ShoppingCart } from './routes/ShoppingCart.tsx'
import Phone from './routes/Phone.tsx'
import { Pay } from './routes/Pay.tsx'
import { Credit } from './routes/Credit.tsx'
import { AboutUs } from './routes/AboutUs.tsx'
import { SimulateCredit } from './routes/SimulateCredit.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/store",
        element: <Store />
      },
      {
        path: "store/:brand",
        element: <Store />
      },
      {
        path: "/shoppingCart",
        element: <ShoppingCart />
      },
      {
        path: '/phone/:namePhone',
        element: <Phone />
      },
      {
        path: '/pay',
        element: <Pay />
      },
      {
        path: '/credit',
        element: <Credit/>
      },
      {
        path: '/aboutUs',
        element: <AboutUs/>
      },
      {
        path: '/simulateCredit',
        element: <SimulateCredit/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ContextGlbal>
    <RouterProvider router={router} />
  </ContextGlbal>
)
