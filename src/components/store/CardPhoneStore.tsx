import { Plus } from "lucide-react";
import { Phone } from "../../types";

interface Props {
  phone: Phone
}

export function CardPhoneStore({ phone }: Props) {
  return (
    <div className="animate-fadeIn hover:scale-[105%] cursor-pointer w-[280px] h-[370px] bg-gray-200 rounded-2xl flex flex-col items-center justify-center px-7 gap-3 relative transition-all duration-300">

      <button className=" text-white bg-darkOrange rounded-full p-[2px] absolute top-3 right-3"> <Plus strokeWidth={2.4} /> </button>

      <img className="h-[200px]" src={`/phones/${phone.name?.replace(/ /g, "-")}.webp`} alt="" />
      <div className="w-full">
        <h4 className="font-semibold text-md opacity-60"> {phone.brand} </h4>
        <h1 className="font-semibold text-xl"> {phone.name} </h1>
        <h3 className="text-xl mt-2"> $ {phone.price?.toLocaleString('es-CO')} COP</h3>
      </div>
    </div>
  )
}