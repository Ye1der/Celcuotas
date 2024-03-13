import { ArrowDown, ArrowUp, ArrowUpDown} from "lucide-react";
import { useState } from "react";

export function OrderBy () {

  // si es true salen las demas opciones y si es false no salen y el rounded b del boton principal cambia
  const [active, setActive] = useState(false)
  const [optionText, setOptionText] = useState('Ordenar por')
  const [optionIcon, setOptionIcon] = useState<JSX.Element>(<ArrowUpDown strokeWidth={2}/>)

  function clickOption (option: boolean | null) {
    if (option) {
      setOptionText("Mayor precio")
      setOptionIcon(<ArrowUp strokeWidth={2}/>)

    } else if (option == false) {
      setOptionText("Menor precio")
      setOptionIcon(<ArrowDown strokeWidth={2}/>)

    } else if (option == null) {
      setOptionText("Ordenar por")
      setOptionIcon(<ArrowUpDown strokeWidth={2}/>)
    }

    setActive(false)
  }

  return (
    <div className="relative w-fit h-fit z-20">
      <button onClick={() => {setActive(!active)}} className={`w-[300px] h-12 px-4 bg-[#FFEFDB] ${!active && 'rounded-b-2xl'} rounded-t-2xl flex justify-between items-center hover:bg-[#ffe0b9] transition-all duration-300`}>
        <h1 className="text-xl font-semibold"> {optionText} </h1>
        {optionIcon}
      </button>

      <div className={`${active ? "visible opacity-1" : "opacity-0 invisible"} transition-all duration-300 absolute`}>
        <button onClick={() => {clickOption(null)}} className="w-[300px] h-12 px-4 bg-[#FAFAFA] flex justify-between items-center">
          <h1 className="text-xl font-semibold"> Ninguno </h1>
          <ArrowUpDown strokeWidth={2}/>
        </button>

        <button onClick={() => {clickOption(true)}} className="w-[300px] h-12 px-4 bg-[#FAFAFA] flex justify-between items-center">
          <h1 className="text-xl font-semibold"> Mayor precio </h1>
          <ArrowUp strokeWidth={2}/>
        </button>

        <button onClick={() => {clickOption(false)}} className="w-[300px] h-12 px-4 bg-[#FAFAFA] rounded-b-2xl flex justify-between items-center">
          <h1 className="text-xl font-semibold"> Menor precio </h1>
          <ArrowDown strokeWidth={2}/>
        </button>
      </div>

    </div>
  )
}