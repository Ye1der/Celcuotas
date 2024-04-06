import React, { SetStateAction } from "react"

interface Props {
  label: string
  selected: string
  setSelected: React.Dispatch<SetStateAction<string>>
}

export function SelectButton ({label, selected, setSelected}: Props) {
  
  const handleSelected = () => {
    setSelected(label)
  }
  
  return (
    <button onClick={handleSelected} className={`${label === selected ? 'opacity-100 bg-smokyBlack bg-opacity-90' : 'opacity-50'} group flex items-center justify-between border-2 border-smokyBlack border-opacity-90 bg-white hover:opacity-100 hover:bg-smokyBlack hover:bg-opacity-90 w-full px-4 py-2 rounded-2xl transition-all duration-300`}>
      <h1 className={`${label === selected ? 'text-white' : 'text-black'} group-hover:text-white text-lg font-semibold transition-colors duration-300`}> {label} </h1>
      <div className={`${label === selected ? 'bg-white' : 'border-2 border-black'} h-5 w-5 rounded-full bg-transparent group-hover:bg-white group-hover:border-transparent transition-colors duration-300`}> </div>
    </button>
  )
}