import { ArrowDown, ArrowUp, ArrowUpDown} from "lucide-react";
import { useState } from "react";

export function OrderBy () {

  // si es true salen las demas opciones y si es false no salen y el rounded b del boton principal cambia
  const [active, setActive] = useState(false)
  const [optionText, setOptionText] = useState('Ordenar por')
  const [optionIcon, setOptionIcon] = useState<JSX.Element>(<ArrowUpDown strokeWidth={1.5}/>)

  function clickOption (option: boolean | null) {
    if (option) {
      setOptionText("Mayor precio")
      setOptionIcon(<ArrowUp strokeWidth={1.5}/>)

    } else if (option == false) {
      setOptionText("Menor precio")
      setOptionIcon(<ArrowDown strokeWidth={1.5}/>)

    } else if (option == null) {
      setOptionText("Ordenar por")
      setOptionIcon(<ArrowUpDown strokeWidth={1.5}/>)
    }

    setActive(false)
  }

  return (
    <div className="relative w-fit h-fit z-20">
      <button onClick={() => {setActive(!active)}} className={`w-[300px] h-12 px-4 bg-[#FFEFDB] ${!active && 'rounded-b-2xl'} rounded-t-2xl flex justify-between items-center transition-all duration-300`}>
        <h1 className="text-xl"> {optionText} </h1>
        {optionIcon}
      </button>

      <div className={`${active ? "visible opacity-1" : "opacity-0 invisible"} transition-all duration-300 absolute`}>
        <button onClick={() => {clickOption(null)}} className="w-[300px] h-12 px-4 bg-[#FAFAFA] flex justify-between items-center">
          <h1 className="text-xl"> Ninguno </h1>
          <ArrowUpDown strokeWidth={1.5}/>
        </button>

        <button onClick={() => {clickOption(true)}} className="w-[300px] h-12 px-4 bg-[#FAFAFA] flex justify-between items-center">
          <h1 className="text-xl"> Mayor precio </h1>
          <ArrowUp strokeWidth={1.5}/>
        </button>

        <button onClick={() => {clickOption(false)}} className="w-[300px] h-12 px-4 bg-[#FAFAFA] rounded-b-2xl flex justify-between items-center">
          <h1 className="text-xl"> Menor precio </h1>
          <ArrowDown strokeWidth={1.5}/>
        </button>
      </div>

    </div>
  )
}