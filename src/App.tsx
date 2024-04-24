import { Outlet, useLocation } from 'react-router-dom'
import { useCustomContext } from './context/Context'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { Modal } from './components/Modal'
import { Search } from './components/Search'
import './components/styles/modal.css'
import { useEffect, useRef, useState } from 'react'
import { Login } from './components/Login'

function App() {
  const { setShowBar, modalSearch, setModalSearch, modalLogin, setModalLogin } = useCustomContext()
  const [modalAnimation, setModalAnimation] = useState<"scale" | "translate">(window.innerWidth >= 1024 ? 'translate' : 'scale')

  useEffect(() => { // escucha cuando el tamaño de la pantalla cambia y ejecuta la funcion selectAnimation
    const selectAnimation = () => { // Dependiendo de que tamaño de pantalla haya pondra una u otra animcaion
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

  const main = useRef<HTMLElement>(null)
  const location = useLocation()

  useEffect(() => { // Pasa el scroll al top cuando cambia de ruta
    main.current?.scrollTo({top: 0})
  }, [location])

  return (
    <section className='w-full h-svh lg:pt-[70px] overflow-hidden'>
      <NavBar modalSearch={modalSearch} setModalSearch={setModalSearch} />

      <section ref={main} onClick={() => { setShowBar(false) }} className='animate-fadeIn w-full h-full overflow-auto scrollbar-none'>
        <Modal active={modalSearch} setActive={setModalSearch} children={<Search />} animation={modalAnimation} />
        <Modal active={modalLogin} setActive={setModalLogin} children={<Login/>}/>
          <Outlet />
        <Footer />
      </section>
    </section>
  )
}

export default App
