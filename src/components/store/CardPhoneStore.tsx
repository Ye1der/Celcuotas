import { Plus } from "lucide-react";

export function CardPhoneStore() {
  return (
    <div className="w-[300px] h-[370px] bg-gray-200 rounded-2xl flex flex-col items-center justify-center px-7 gap-3 relative">

      <button className="text-white bg-darkOrange rounded-full p-[2px] absolute top-5 right-5"> <Plus strokeWidth={2.4} /> </button>

      <img src="/phoneStore.png" alt="" />
      <div className="w-full">
        <h4 className="font-semibold text-md opacity-60"> Samsung </h4>
        <h1 className="font-semibold text-xl"> Samsung Galaxy A34 </h1>
        <h3 className="text-xl mt-2"> $1.034.950 </h3>
      </div>
    </div>
  )
}