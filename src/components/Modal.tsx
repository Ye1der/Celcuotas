import { ReactNode, useEffect, useState } from "react"
import './modal.css'

interface Props {
  children: ReactNode
  active: boolean
  setActive: (boolean: boolean) => void
  animation?: "scale" | "translate"
}

export function Modal ({ children, active, setActive, animation = "scale"}: Props) {

  const [firstHide, setFirstHide] = useState(false)

  useEffect(() => { // hace que al principio no se renderice el componente, para que no se vea como sale y se esconde
    if (!firstHide) { 
      if (active == true) {
        setFirstHide(true)
      }
    }
  }, [active])

  useEffect(() => { // escucha el evento de la tecla esc y si es pulsada cierra el modal
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActive(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setActive]);

  if (firstHide) return (
    <section onClick={() => {setActive(false)}} className={`${active ? "showModal" : "hideModal"} z-50`}>
      <div onClick={(e) => e.stopPropagation()} className={`${active ? animation === 'scale' ? 'showChildrenScale' : "showChildrenTranslate" : animation === 'scale' ? 'hideChildrenScale' : 'hideChildrenTranslate'} z-50`}>
        {children}
      </div>
    </section>
  )
}