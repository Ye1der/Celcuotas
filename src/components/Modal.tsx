import { ReactNode, useEffect, useState } from "react"
import './modal.css'

interface Props {
  method: () => void | null
  children: ReactNode
  active: boolean
  setActive: (boolean: boolean) => void
}

export function Modal ({method, children, active, setActive}: Props) {

  const [firstHide, setFirstHide] = useState(false)

  function accept () {
    if (method == null) return
    method()
  }

  useEffect(() => {
    if (!firstHide) {
      if (active == true) {
        setFirstHide(true)
      }
    }
  })

  if (firstHide) return (
    <section onClick={() => {setActive(false)}} className={`${active ? "showModal" : "hideModal"}`}>
      <div onClick={(e) => e.stopPropagation()} className={`${active ? 'showChildren' : 'hideChildren'}`}>
        {children}
      </div>
    </section>
  )
}