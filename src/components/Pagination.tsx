import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  array: any[]
  page: number
  setPage: (number: number) => void
}

export function Pagination ({array, page, setPage}: Props) {

  const [pages, setPages] = useState(Math.ceil(array.length/10))

  useEffect(() => {
    setPages(Math.ceil(array.length/12))
  }, [array])

  if (pages > 1) return (
    <div className="animate-fadeIn flex items-center gap-3 max-sm:scale-90">
      <ChevronLeft className="cursor-pointer hover:scale-125 transition-all duration-300" onClick={() => {page > 1 && setPage(page - 1)}}/>
      { Array.from({length: pages}, (_, index) => {
          return <button className={`${page === index + 1 ? 'bg-darkOrange' : 'opacity-60'} font-semibold hover:opacity-100 rounded-full h-8 w-8 flex items-center justify-center transition-all duration-300`}
          onClick={() => {setPage(index + 1)}}
          key={index}> 
            {index + 1} 
          </button>
        })
      }
      <ChevronRight className="cursor-pointer hover:scale-125 transition-all duration-300" onClick={() => {page < pages && setPage(page + 1)}}/>
    </div>
  )
}