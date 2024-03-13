import { ChevronDown } from "lucide-react"
import { ReactNode } from "react"

interface Props {
  title: string
  accordion: string
  setAccordion: (string: string) => void
  children: ReactNode
}

export function FilterAccordion ({title, accordion, setAccordion, children}: Props ) {
  return (
    <div className="w-full bg-white font-medium py-1 px-2 my-2 rounded-xl relative transition-all duration-300">
      <button className="w-full flex justify-between items-center"
        onClick={() => { setAccordion(accordion == title.toLowerCase() ? '' : title.toLowerCase()) }}>
        <h1 className="text-xl"> {title} </h1>
        <ChevronDown className={`${accordion == title.toLowerCase() && 'rotate-[180deg]'} trasnition-all duration-300`} color="orange" strokeWidth={2.3} size={25} />
      </button>

      <div className={` grid ${accordion == title.toLowerCase() ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} overflow-hidden w-full transition-all duration-300 ease-in-out`}>
        {children}
      </div>
    </div>
  )
}