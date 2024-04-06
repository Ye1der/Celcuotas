import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface Props {
  label: string
  width?: string
  options: string[]
}

export function CustomSelectInput({ label, width = '300px', options }: Props) {

  const [selectedOption, setSelectedOption] = useState('');
  const [showOptions, setShowOptions] = useState(false)

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={`relative flex items-center h-fit mt-5 w-[${width}]`}>
      <button onClick={() => { setShowOptions(!showOptions) }} className={`peer ${selectedOption !== '' && 'border-opacity-70'} ${showOptions ? 'rounded-t-2xl border-opacity-70' : 'rounded-2xl border-opacity-40'} z-40 group text-start px-4 text-lg font-semibold outline-none bg-transparent border-2 border-black w-full h-12 transition-all duration-300 relative`}>
        {selectedOption}
        <ChevronDown className={`absolute right-3 top-1/2 -translate-y-[40%] ${showOptions ? 'rotate-180' : ''} transition-transform duration-300`} strokeWidth={2.4} />
      </button>


      <div className={`${showOptions ? 'animate-fadeIn' : 'animate-fadeOut'} border-2 border-t-0 border-black border-opacity-70 rounded-b-2xl absolute bottom-0 translate-y-full w-[${width}] z-30 transition-all duration-300`}>
        {options.map((value, index) => {

          const border = options.length - 1 === index ? 'rounded-b-2xl' : 'border-b-2 border-black border-opacity-70'
          const upperValue = value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase()

          return (
            <button key={index} onClick={() => {
              setSelectedOption(upperValue)
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