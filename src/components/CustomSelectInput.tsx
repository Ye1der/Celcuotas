// import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { UseControllerProps, useController } from "react-hook-form";

interface Props extends UseControllerProps<any>{
  label: string
  width?: string
  options: string[]
}

// type FormValue = {
//   typeDoc: string,
//   names: string
//   lastnames: string
//   email: string
//   doc: string
//   department: string
//   address: string
//   tower: string
//   city: string
//   neighbordhood: string
// }

export const CustomSelectInput = ({ label, width = '300px', options, name, control, rules, ...rest }: Props) => {

  const [selectedOption, setSelectedOption] = useState('');
  const [showOptions, setShowOptions] = useState(false)
  const {field} = useController({name, control, rules}) // field es el valor que react hook form va a leer

  return (
    <div className={`relative flex items-center h-fit mt-5 w-[${width}]`}>
      {/* le ponemos el field al input para que lo registre dentro del form */}
      <input {...rest} {...field} required readOnly type="text" value={field.value} onClick={() => { setShowOptions(!showOptions) }} className={`peer ${selectedOption !== '' && 'border-opacity-70'} ${showOptions ? 'rounded-t-2xl border-opacity-70' : 'rounded-2xl border-opacity-40'} z-40 cursor-pointer group text-start px-4 text-lg font-semibold outline-none bg-transparent border-2 border-black w-full h-12 transition-all duration-300 relative`} />

      <div className={`${showOptions ? 'animate-fadeIn' : 'animate-fadeOut'} border-2 border-t-0 border-black border-opacity-70 rounded-b-2xl absolute bottom-0 translate-y-full w-[${width}] z-50 transition-all duration-300`}>
        {options.map((value, index) => {

          const border = options.length - 1 === index ? 'rounded-b-2xl' : 'border-b-2 border-black border-opacity-70'
          const upperValue = value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase()

          return (
            <button type="button" key={index} onClick={() => {
              setSelectedOption(upperValue)
              field.onChange(upperValue) // cambiamos el valor del field
              setShowOptions(false)
            }}
              className={`${border} w-full h-12 text-start text-lg text-black text-opacity-70 font-semibold px-4 bg-[#f3f3f3] hover:bg-white hover:text-opacity-95 transition-colors duration-300`}>
              {upperValue}
            </button>
          )
        })}
      </div>

      <label className={`${selectedOption === '' && !showOptions ? 'text-opacity-60 top-1/2 -translate-y-1/2' : '-translate-y-[90%] -top-0 text-sm text-opacity-80'} text-black p-1 absolute left-3 cursor-text font-semibold transition-all duration-300 pointer-events-none`} htmlFor="input"> {label} </label>
    </div>
  )
}