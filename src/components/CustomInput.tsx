import React, { InputHTMLAttributes, forwardRef, useState } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  width?: string
  type?: string
  className?: string
}

export const CustomInput = forwardRef<HTMLInputElement, Props>(({ label, type = 'text', className = '', width = "300px", ...rest }, ref) => {
  
  const [invalid, setInvalid] = useState(false)

  const handleInvalid = (event: React.ChangeEvent<HTMLInputElement>) => {
    const required = event.target.validity.valueMissing // muestra true cuando todavia no se a escrito en el
    const isValid = event.target.checkValidity() // muestra false si es invalido y true si es valido

    if (!required && !isValid) setInvalid(true)
    else setInvalid(false)

  }

  return (
    <div className={`relative flex items-center h-fit mt-5 w-[${width}]`}>
      <input ref={ref} className={`peer ${className} ${invalid ? 'border-red-500 border-opacity-100' : 'border-black border-opacity-40'} valid:border-opacity-70 focus:border-opacity-70 px-4 w-full h-12 outline-none bg-transparent border-2 rounded-2xl text-lg font-semibold transition-all duration-300`}
        {...rest} autoComplete="off" spellCheck={false} required type={type} onChange={handleInvalid} />
      <label className={`${invalid ? 'text-red-500 text-opacity-100 -translate-y-[90%] -top-0 text-sm' : 'text-black text-opacity-60 top-1/2 -translate-y-1/2'} peer-valid:-translate-y-[90%] peer-valid:-top-0 peer-valid:text-sm peer-valid:text-opacity-80 peer-focus:-translate-y-[90%] peer-focus:-top-0 peer-focus:text-sm peer-focus:text-opacity-80 p-1 absolute left-3 cursor-text font-semibold transition-all duration-300 pointer-events-none`} htmlFor="input"> {label} </label>
    </div>
  )
})