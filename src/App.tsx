import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dashboard } from './routes/Dashboard'
import { useCustomContext } from './context/Context'
import { NavBar } from './components/NavBar'
import { Store } from './routes/Store'
import { Footer } from './components/dashboard/Footer'
import { Modal } from './components/Modal'
import { Search } from './components/Search'
import './components/modal.css'
import { useEffect, useState } from 'react'
import { ShoppingCart } from './routes/ShoppingCart'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/store",
    element: <Store/>
  },
  {
    path: "/shoppingCart",
    element: <ShoppingCart/>
  }
])

function App() {
  const {setShowBar, modalSearch, setModalSearch} = useCustomContext()
  const [modalAnimation, setModalAnimation] = useState<"scale" | "translate">(window.innerWidth >= 1024 ? 'translate' : 'scale')

  useEffect(() => { // escucha cuando el tamaño de la pantalla cambia y ejecuta la funcion selectAnimation
    const selectAnimation = () => {
      if (window.innerWidth >= 1024) {
        setModalAnimation('translate')
      } else {
        setModalAnimation('scale')
      }
    }

    window.addEventListener('resize', selectAnimation)

    return () => {
      window.removeEventListener('resize', selectAnimation)
    }
  }, [])

  return (
    <section className='w-full h-svh lg:pt-[70px] overflow-hidden'>
        <NavBar modalSearch={modalSearch} setModalSearch={setModalSearch}/>

        <section onClick={() => {setShowBar(false)}} className='animate-fadeIn w-full h-full overflow-auto scrollbar-none'>
          <Modal active={modalSearch} setActive={setModalSearch} children={<Search/>} animation={modalAnimation}/>
          <RouterProvider router={router}/>
          <Footer/>
        </section>
    </section>
  )
}

export default App
