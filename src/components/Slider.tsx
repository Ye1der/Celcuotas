import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardPhone } from "./CardPhone";
import './slider.css'
import { useCustomContext } from "../context/Context";

export function Slider() {

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const { setSliderItem, sliderItem, setHideItem } = useCustomContext()

  const handleNext = () => {
    sliderItem == array.length - 1 ? setSliderItem(0) : setSliderItem(sliderItem + 1)
    setHideItem(false)
  };

  const handlePrev = () => {
    sliderItem == 0 ? setSliderItem(array.length - 1) : setSliderItem(sliderItem - 1)
    setHideItem(true)
  };

  return (
    <section className="flex flex-col items-center gap-5 max-md:scale-90 max-sm:scale-[70%]">
      <div className="slider h-[300px] w-[550px] flex items-center relative">
        {array.map((element, index) => (
          <CardPhone key={index} url="/phone.png" name={`${element}`} index={index} arrayLength={array.length} />
        ))}
      </div>

      <div className="flex gap-3">
        <button onClick={handlePrev} className="p-2 rounded-full bg-gray-200 text-black scale-90">
          <ChevronLeft />
        </button>

        <button onClick={handleNext} className="p-2 rounded-full bg-gray-200 text-black scale-90">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
